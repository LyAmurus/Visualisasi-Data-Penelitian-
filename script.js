// Gender Chart
const ctxGender = document.getElementById('genderChart').getContext('2d');
const genderChart = new Chart(ctxGender, {
  type: 'bar',
  data: {
    labels: ['Laki-Laki', 'Perempuan'],
    datasets: [{
      label: 'Distribusi Gender',
      data: [47, 43],
      backgroundColor: ['#42A5F5', '#EC407A'],
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Jumlah Responden' }
      },
      x: {
        title: { display: true, text: 'Jenis Kelamin' }
      }
    },
    plugins: { legend: { display: false } }
  }
});

// Mental Health Chart
const ctxMental = document.getElementById('mentalHealthChart').getContext('2d');
const mentalHealthChart = new Chart(ctxMental, {
  type: 'bar',
  data: {
    labels: ['UEQ (Likert 5)', 'Cognitive Walkthrough', 'UE - Mahasiswa IT'],
    datasets: [{
      label: 'Jumlah Responden',
      data: [61, 90, 30],
      backgroundColor: '#2d9cdb',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Jumlah Responden' } },
      x: { title: { display: true, text: 'Jenis Pengujian' } }
    },
    plugins: { legend: { display: false } }
  }
});

// UEQ Radar Chart & Expected Chart

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

  // Expected Chart
   const ctxExpected = document.getElementById('expectedChart');
  if (ctxExpected) {
    new Chart(ctxExpected, {
      type: 'bar',
      data: {
        labels: [
          'Mood Tracker (90%)',
          'Chat Konseling (73%)',
          'Self Care (63%)',
          'Journaling List (63%)',
          'Forum Remaja (50%)',
          'Pengingat Aktivitas Positif (43%)'
        ],
        datasets: [{
          label: 'Jumlah Pemilih (30 responden)',
          data: [27, 22, 19, 19, 15, 13],
          backgroundColor: '#66bb6a',
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 30,
            ticks: { stepSize: 5 }
          }
        }
      }
    });
  }
});
