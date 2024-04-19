
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

const Lines = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [4,8,3,6, 4, 3, 7,],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [5,2,7,9, 3, 7,1 ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} /> 
    </>
  )
}

export default Lines






