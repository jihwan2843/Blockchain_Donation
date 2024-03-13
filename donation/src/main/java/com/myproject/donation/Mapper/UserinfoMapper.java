package com.myproject.donation.Mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.myproject.donation.DTO.BeneficiaryList;
import com.myproject.donation.DTO.Beneficiaryinfo;
import com.myproject.donation.DTO.DonationList;
import com.myproject.donation.DTO.Userinfo;

import java.util.*;


@Mapper
public interface UserinfoMapper {
  // 기부자 회원가입
  @Insert("Insert into userinfo(useremail, userpasswd) values(#{useremail},#{userpasswd})")
  public void SignupUser(Userinfo userinfo);
  // 특정 기부자 회원 정보 가져오기
  @Select("select * from userinfo where useremail=#{useremail}")
  public Userinfo GetUserinfo(@Param("useremail") String email);

  // 지갑 주소값이 default이기 때문에 등록한 지갑주소 값으로 수정하기 userwalletaddr
  @Update("update userinfo set userwalletaddr=#{userwalletaddr} where useremail=#{useremail}")
  public void RegisterWalletAddr(Userinfo userinfo);

  // 수혜자 지갑 주소값이 default이기 때문에 등록한 지갑주소 값으로 수정하기 userwalletaddr
  @Update("update beneficiaryinfo set benefiwalletaddr=#{benefiwalletaddr} where benefiemail=#{benefiemail}")
  public void RegisterBeneWalletAddr(Beneficiaryinfo beneinfo);

  // 수혜자 회원가입
  @Insert("Insert into beneficiaryinfo values(#{benefiemail},#{benefipasswd},#{benefiname},#{benefiphone},#{benefiaddr},#{benefiwalletaddr})")
  public void SignupBeneficiary(Beneficiaryinfo beneinfo);

  // 특정 수혜자 회원정보 가져오기
  @Select("select * from beneficiaryinfo where benefiemail=#{benefiemail}")
  public Beneficiaryinfo GetBeneficiaryinfo(@Param("benefiemail") String benefiemail);

  // 수혜자가 수혜목록 등록
  @Insert("Insert into beneficiarylist values(#{benefiwalletaddr},#{donationtype})")
  public void RegisterBeneficiaryList(BeneficiaryList benelist);

  // 수혜자의 수혜 목록 가져오기
  @Select("Select * from beneficiarylist where benefiwalletaddr=#{benefiwalletaddr}")
  public BeneficiaryList getBeneficiaryListbyAddr(@Param("benefiwalletaddr") String benefiwalletaddr);

  // 특정 타입 수혜목록 전체 가져오기
  @Select("Select * from beneficiarylist where donationtype =#{donationtype}")
  public ArrayList<BeneficiaryList> getBeneficiaryListbyType(@Param("donationtype") String donationtype);

  // 내 전체 기부리스트 가지고 오기
  @Select("select * from donationlist where useremail=#{useremail}")
  public ArrayList<DonationList> getDonationList(@Param("useremail") String useremail);

}
