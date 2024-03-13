package com.myproject.donation.DTO;

public class BeneficiaryList {
  private String benefiwalletaddr;
  private String donationtype;
  public String getBenefiwalletaddr() {
    return benefiwalletaddr;
  }
  public void setBenefiwalletaddr(String benefiwalletaddr) {
    this.benefiwalletaddr = benefiwalletaddr;
  }
  public String getDonationtype() {
    return donationtype;
  }
  public void setDonationtype(String donationtype) {
    this.donationtype = donationtype;
  }
  public BeneficiaryList(String benefiwalletaddr, String donationtype) {
    this.benefiwalletaddr = benefiwalletaddr;
    this.donationtype = donationtype;
  }
  
}
