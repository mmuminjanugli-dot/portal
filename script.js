// База данных сотрудников (5 пользователей)
const employees = [
    { name: "Иван Иванов", role: "Директор", icon: "👔" },
    { name: "Ольга Петрова", role: "Главный бухгалтер", icon: "📊" },
    { name: "Алексей Сидоров", role: "Системный администратор", icon: "💻" },
    { name: "Мария Смирнова", role: "Менеджер по продажам", icon: "📞" },
    { name: "Дмитрий Кузнецов", role: "Маркетолог", icon: "🚀" }
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
