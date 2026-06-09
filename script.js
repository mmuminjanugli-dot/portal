// База данных сотрудников (5 пользователей)
const employees = [
    { name: "Рукия", role: "Директор", icon: "👔" },
    { name: "Албина", role: "Главный бухгалтер", icon: "📊" },
    { name: "Андрей", role: "Системный администратор", icon: "💻" },
    { name: "Али", role: "Менеджер по продажам", icon: "📞" },
    { name: "Солиха", role: "Маркетолог", icon: "🚀" }
];

// Функция для вывода сотрудников на страницу
function loadTeam() {
    const container = document.getElementById('team-container');
    
    employees.forEach(person => {
        // Создаем карточку сотрудника
        const card = document.createElement('div');
        card.className = 'team-card';
        
        card.innerHTML = `
            <div class="team-avatar">${person.icon}</div>
            <h3>${person.name}</h3>
            <p>${person.role}</p>
        `;
        
        container.appendChild(card);
    });
}

// Запускаем функцию после загрузки страницы
document.addEventListener('DOMContentLoaded', loadTeam);
