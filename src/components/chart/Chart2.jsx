import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);   

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },

  },
};



const Chart2 = () => {

  const labels = ['January', 'February', 'March', 'April', "May", "June", "July", "Augest", "September", "October", "November", "December"];
  const data = {
    labels,
    datasets: [
      {
        label: 'Campaign Sent',
        data: [3, 6, 8, 6, 8, 4, 1,5, 2, 7, 4, 1 ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Leads Generate',
        data: [4, 7, 2, 1, 9, 2, 7, 4, 3, 1, 9, 6],
        backgroundColor: '#4094f1',

      },
      {
        label: 'Deals Customer',
        data: [1, 9, 5, 3, 6, 1, 6, 3, 9],
        backgroundColor: '#de2fff',

      },
      {
        label: 'Revenue Booked',
        data: [ 6, 3, 9, 1, 5, 3, 6, 1, 4, 2, 4, 3, 1],
        backgroundColor: '#ff8c0a',
  
      },
    ],
  };

  return (
    <>
       <Bar options={options} data={data} />
    </>
  )
}

export default Chart2  

