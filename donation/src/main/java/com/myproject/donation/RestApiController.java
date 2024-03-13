package com.myproject.donation;

import java.util.*;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.donation.DTO.BeneficiaryList;
import com.myproject.donation.DTO.Beneficiaryinfo;
import com.myproject.donation.DTO.DonationList;
import com.myproject.donation.DTO.Userinfo;
import com.myproject.donation.Mapper.UserinfoMapper;


@RequestMapping("/api")
@RestController
public class RestApiController {
  
  @Autowired
  private UserinfoMapper usermapper;

  // 회원가입하기
  @PostMapping(value = "/SignupFromReact")
  public String signup(@RequestBody Map<String, Object> data){
    
    // React에서 회원가입 시도한 데이터 가지고 오기
    String useremail = (String) data.get("email");
    String userpasswd = (String)data.get("password");


    Userinfo userinfo = new Userinfo(useremail,userpasswd);

    usermapper.SignupUser(userinfo);
  
    return "Signup Success";
  }

  // 수혜자 전용 회원가입하기
  @PostMapping(value = "/BeneficialySignup")
  public String BeneficialySignup(@RequestBody Map<String, Object> data){

    // React에서 수혜자 회원가입 시도한 데이터 가지고 오기
    String beneEmail = (String)data.get("beneEmail");
    String benePasswd =(String)data.get("benePasswd");
    String beneName =(String)data.get("beneName");
    String Phone =(String)data.get("benePhone");
    int benePhone = Integer.parseInt(Phone);
    String beneAddress =(String)data.get("beneAddress");

    Beneficiaryinfo beneinfo = new Beneficiaryinfo(beneEmail, benePasswd, beneName, benePhone, beneAddress,"0x");

    usermapper.SignupBeneficiary(beneinfo);
  
    return "Signup Success";
  }

  // 로그인 하기
  @PostMapping(value = "/LoginFromReact")
  public String login(@RequestBody Map<String, Object> data){
    
    // React에서 로그인 시도한 데이터 가지고 오기
    String useremail = (String) data.get("email");
    String userpasswd = (String)data.get("password");

    Userinfo userinfo = usermapper.GetUserinfo(useremail);
    if(userinfo.getUseremail().equals(useremail) && userinfo.getUserpasswd().equals(userpasswd)){
      return "Login Success";
    }else{
      return "Login Failure";
    }    
  }

  // 수혜자 전용 로그인 하기
  @PostMapping(value = "/BeneficiaryLoginFromReact")
  public String Beneficiarylogin(@RequestBody Map<String, Object> data){
    
    // React에서 로그인 시도한 데이터 가지고 오기
    String benefiemail = (String) data.get("email");
    String benefipasswd = (String)data.get("password");

    Beneficiaryinfo benefiinfo = usermapper.GetBeneficiaryinfo(benefiemail);
    if(benefiinfo.getBenefiemail().equals(benefiemail) && benefiinfo.getBenefipasswd().equals(benefipasswd)){
      return "Login Success";
    }else{
      return "Login Failure";
    }    
  }

  // 지갑 주소 등록하기
  @PostMapping(value = "/RegisterWalletAddrFromReact")
  public String RegisterWallet(@RequestBody Map<String,Object> data) {
      
      String useremail = (String)data.get("email");
      String userwalletaddr = (String)data.get("wallet");
      
      Userinfo userinfo = new Userinfo();
      userinfo.setUserwalletaddr(userwalletaddr);
      userinfo.setUseremail(useremail);
      
      // Mapper 이용해서 DB에 저장
      usermapper.RegisterWalletAddr(userinfo);
      
      return "Register Success";
  }

  // 수혜자 지갑 주소 등록하기
  @PostMapping(value = "/RegisterBeneWalletAddrFromReact")
  public String RegisterBeneWallet(@RequestBody Map<String,Object> data) {

      String benefiemail = (String)data.get("email");
      String benefiwalletaddr = (String)data.get("wallet");
      
      Beneficiaryinfo beneinfo = new Beneficiaryinfo();
      beneinfo.setBenefiemail(benefiemail);
      beneinfo.setBenefiwalletaddr(benefiwalletaddr);
      
      // Mapper 이용해서 DB에 저장
      usermapper.RegisterBeneWalletAddr(beneinfo);
      
      return "Register Success";
  }

  // 수혜자의 수혜 리스트 등록
  @PostMapping(value = "/BeneficiaryList")
  public String BeneficiaryList(@RequestBody Map<String,Object> data){
    String benefiemail = (String)data.get("email");
    String donationtype= (String)data.get("type");

    // 수혜자 정보를 조회해서 지갑주소를 가져옴
    Beneficiaryinfo beneinfo = usermapper.GetBeneficiaryinfo(benefiemail);

    String benefiwalletaddr = beneinfo.getBenefiwalletaddr();

    // 수혜를 신청했는지 안했는지 유효성 검사 
    BeneficiaryList beneCheck = usermapper.getBeneficiaryListbyAddr(benefiwalletaddr);
    
    if(beneCheck == null){
      BeneficiaryList benelist = new BeneficiaryList(benefiwalletaddr, donationtype);

      usermapper.RegisterBeneficiaryList(benelist);

      return "Register success";

    }else{
      return "Register Failure";
    }
  }

  // 리액트로 수혜 리스트 모든 정보 제공하기
  @PostMapping(value = "/getBeneficiaryList")
  public ArrayList<BeneficiaryList> getBeneficiaryList(@RequestBody Map<String,Object> data){
    String donationtype= (String)data.get("type");

    ArrayList<BeneficiaryList> benelist = usermapper.getBeneficiaryListbyType(donationtype);
    
    return benelist;
  }


// 내가 기부한 리스트 리액트로 전달하기npm
@PostMapping("/myDonationList")
public ArrayList<DonationList> myDonationList(@RequestBody Map<String,Object> data){
  
  String useremail = (String)data.get("email");
  
  ArrayList<DonationList> mydonationList = usermapper.getDonationList(useremail);
  
  return mydonationList;
  }
}

