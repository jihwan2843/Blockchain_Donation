const MyDonationListChart = ({ no, type, date, amount }) => {
  return (
    <tr>
      <td>{no}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default MyDonationListChart;
