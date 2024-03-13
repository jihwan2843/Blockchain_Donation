package com.myproject.donation.DTO;

public class Userinfo {
  private String useremail;
  private String userpasswd;
  private String userwalletaddr;
  public String getUseremail() {
    return useremail;
  }
  public String getUserpasswd() {
    return userpasswd;
  }
  
  public String getUserwalletaddr() {
    return userwalletaddr;
  }
  public void setUserwalletaddr(String userwalletaddr) {
    this.userwalletaddr = userwalletaddr;
  }
  
  public void setUseremail(String useremail) {
    this.useremail = useremail;
  }
  public void setUserpasswd(String userpasswd) {
    this.userpasswd = userpasswd;
  }
  public Userinfo() {}

  public Userinfo(String useremail, String userpasswd) {
    this.useremail = useremail;
    this.userpasswd = userpasswd;
  }
}
