// Chart Bar - Gender (Ganti dari Pie ke Bar)
const ctxGender = document.getElementById('genderChart').getContext('2d');
const genderChart = new Chart(ctxGender, {
  type: 'bar',
  data: {
    labels: ['Laki-Laki', 'Perempuan'],
    datasets: [{
      label: 'Distribusi Gender',
      data: [42, 54],
      backgroundColor: ['#42A5F5', '#EC407A'],
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
          text: 'Jenis Kelamin'
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

// Chart Bar - Jumlah Responden UEQ, CW, UE Mahasiswa IT
const ctxMental = document.getElementById('mentalHealthChart').getContext('2d');
const mentalHealthChart = new Chart(ctxMental, {
  type: 'bar',
  data: {
    labels: ['UEQ (Likert 5)', 'Cognitive Walkthrough', 'UE - Mahasiswa IT'],
    datasets: [{
      label: 'Jumlah Responden',
      data: [45, 45, 20],
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
          text: 'Jenis Pengujian'
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

// Chart Radar - UEQ 6 Aspek (Likert 5)
document.addEventListener("DOMContentLoaded", function () {
  const ctxUEQ = document.getElementById('ueqChart');
  if (ctxUEQ) {
    new Chart(ctxUEQ, {
      type: 'radar',
      data: {
        labels: ['Attractiveness', 'Perspicuity', 'Efficiency', 'Dependability', 'Stimulation', 'Novelty'],
        datasets: [{
          label: 'Rata-rata Skor UEQ (1-5)',
          data: [4.2, 4.4, 4.0, 4.1, 4.3, 4.5],
          backgroundColor: 'rgba(45, 156, 219, 0.2)',
          borderColor: '#2d9cdb',
          pointBackgroundColor: '#2d9cdb'
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 5,
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }
});
