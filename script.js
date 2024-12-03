function openAchievements(department) {
    const achievementsContent = document.getElementById('achievements-content');
    achievementsContent.innerHTML = `<h2>${department.charAt(0).toUpperCase() + department.slice(1)} Achievements</h2><p>Details about achievements in the ${department} department.</p>`;
    document.getElementById('achievements').style }