package com.myproject.donation.DTO;

public class Beneficiaryinfo {
  private String benefiemail;
  private String benefipasswd;
  private String benefiname;
  private int benefiphone;
  private String benefiaddr;
  private String benefiwalletaddr;

  public String getBenefiemail() {
    return benefiemail;
  }
  public void setBenefiemail(String benefiemail) {
    this.benefiemail = benefiemail;
  }
  public String getBenefipasswd() {
    return benefipasswd;
  }
  public void setBenefipasswd(String benefipasswd) {
    this.benefipasswd = benefipasswd;
  }
  public String getBenefiname() {
    return benefiname;
  }
  public void setBenefiname(String benefiname) {
    this.benefiname = benefiname;
  }
  public int getBenefiphone() {
    return benefiphone;
  }
  public void setBenefiphone(int benefiphone) {
    this.benefiphone = benefiphone;
  }
  public String getBenefiaddr() {
    return benefiaddr;
  }
  public void setBenefiaddr(String benefiaddr) {
    this.benefiaddr = benefiaddr;
  }
  public String getBenefiwalletaddr() {
    return benefiwalletaddr;
  }
  public void setBenefiwalletaddr(String benefiwalletaddr) {
    this.benefiwalletaddr = benefiwalletaddr;
  }

  public Beneficiaryinfo(String benefiemail, String benefipasswd, String benefiname, int benefiphone,
      String benefiaddr, String benefiwalletaddr) {
    this.benefiemail = benefiemail;
    this.benefipasswd = benefipasswd;
    this.benefiname = benefiname;
    this.benefiphone = benefiphone;
    this.benefiaddr = benefiaddr;
    this.benefiwalletaddr = benefiwalletaddr;
  }
  public Beneficiaryinfo() {}
  
  
  
  
}
