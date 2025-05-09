const ctxGender = document.getElementById('genderChart').getContext('2d');
const genderChart = new Chart(ctxGender, {
  type: 'pie',
  data: {
    labels: ['Perempuan', 'Laki-laki'],
    datasets: [{
      label: 'Distribusi Gender',
      data: [2, 1],
      backgroundColor: [
        '#ec407a',
        '#42a5f5'
      ],
      borderColor: '#fff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    }
  }
});

const ctxMental = document.getElementById('mentalHealthChart').getContext('2d');
const mentalHealthChart = new Chart(ctxMental, {
  type: 'bar',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Jumlah Remaja Mengalami Masalah Mental',
      data: [10, 25, 40, 35, 50],
      backgroundColor: '#2d9cdb',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Responden'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Tahun'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});