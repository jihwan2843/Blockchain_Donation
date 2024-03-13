package com.myproject.donation.DTO;

public class DonationList {
  private int num;
  private String useremail;
  private String donationtype;
  private String donationdate;
  private int donationamount;
  private String benefiwalletaddr;
  public int getNum() {
    return num;
  }
  public void setNum(int num) {
    this.num = num;
  }
  public String getUseremail() {
    return useremail;
  }
  public void setUseremail(String useremail) {
    this.useremail = useremail;
  }
  public String getDonationtype() {
    return donationtype;
  }
  public void setDonationtype(String donationtype) {
    this.donationtype = donationtype;
  }
  public String getDonationdate() {
    return donationdate;
  }
  public void setDonationdate(String donationdate) {
    this.donationdate = donationdate;
  }
  public int getDonationamount() {
    return donationamount;
  }
  public void setDonationamount(int donationamount) {
    this.donationamount = donationamount;
  }
  public String getBenefiwalletaddr() {
    return benefiwalletaddr;
  }
  public void setBenefiwalletaddr(String benefiwalletaddr) {
    this.benefiwalletaddr = benefiwalletaddr;
  }

  

}
