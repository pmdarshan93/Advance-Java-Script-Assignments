async function loadCharts() {
    const res = await fetch("/getChartData");
    const data = await res.json();

    // ---- PIE CHART ----
    const valid = data.token_distribution.valid_tokens || 0;
    const expired = data.token_distribution.expired_tokens || 0;
    const total = valid + expired;

    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Valid', 'Expired'],
            datasets: [{
                data: [valid, expired],
                backgroundColor: ['rgba(63,185,80,0.85)', 'rgba(248,81,73,0.85)'],
                borderColor: ['#3fb950', '#f85149'],
                borderWidth: 2,
                hoverOffset: 8,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (ctx) => ` ${ctx.parsed} tokens (${Math.round(ctx.parsed / total * 100)}%)`
                    }
                }
            }
        }
    });

    // Update pie legend dynamically
    document.getElementById("pie-valid-label").textContent = `Valid : ${valid} (${Math.round(valid/total*100)}%)`;
    document.getElementById("pie-expired-label").textContent = `Expired : ${expired} (${Math.round(expired/total*100)}%)`;

    // ---- BAR CHART ----
    // Build labels 1-7 and map data to days
    const labels = ['1','2','3','4','5','6','7'];
    const createdData = Array(7).fill(0);

    data.activity_7days.forEach(row => {
        const today = new Date().getDate();
        const index = 6 - (today - row.day); // map day to 0-6 index
        if (index >= 0 && index < 7) {
            createdData[index] = row.created;
        }
    });

    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: 'Created',
                    data: createdData,
                    backgroundColor: 'rgba(63,185,80,0.75)',
                    borderRadius: 4,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    grid: { color: 'rgba(48,54,61,0.5)' },
                    ticks: { color: '#7d8590' },
                    border: { display: false }
                },
                y: {
                    grid: { color: 'rgba(48,54,61,0.5)' },
                    ticks: { color: '#7d8590' },
                    border: { display: false },
                    beginAtZero: true
                }
            }
        }
    });
}

loadCharts();
console.log("@@@@@@@@@");


async function loadDashboard() {
    const res = await fetch("/getDashboardInfo");
    const data = await res.json();
    const info = data.data[0];
    console.log(info.total_clients)
    document.getElementById("total-clients").textContent = info.total_clients;
    document.getElementById("total-projects").textContent = info.total_projects;
    document.getElementById("valid-tokens").textContent = info.valid_tokens;
    document.getElementById("expired-tokens").textContent = info.expired_tokens;

    // Stats
    // document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = info.total_clients;
    // document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = info.total_projects;
    // document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = info.valid_tokens;
    // document.querySelector('.stat-card:nth-child(4) .stat-number').textContent = info.expired_tokens;

    // Projects per client list
    const list = document.getElementById("client-project-list");
list.innerHTML = "";

info.projects_per_client.forEach(client => {
    // row
    const row = document.createElement("div");
    row.classList.add("client-row");

    // left side
    const rowLeft = document.createElement("div");
    rowLeft.classList.add("client-row-left");

    const avatar = document.createElement("div");
    avatar.classList.add("client-avatar");

    const avatarImg = document.createElement("img");
    avatarImg.src = "/images/profile.png";
    avatarImg.width = 20;
    avatarImg.height = 20;
    avatar.appendChild(avatarImg);

    const name = document.createElement("span");
    name.textContent = client.name;

    rowLeft.appendChild(avatar);
    rowLeft.appendChild(name);

    // right side
    const rowRight = document.createElement("div");
    rowRight.classList.add("client-row-right");

    const count = document.createElement("strong");
    count.textContent = client.project_count;

    const label = document.createTextNode(" Projects");

    rowRight.appendChild(count);
    rowRight.appendChild(label);

    // assemble
    row.appendChild(rowLeft);
    row.appendChild(rowRight);
    list.appendChild(row);
});
}

loadDashboard();