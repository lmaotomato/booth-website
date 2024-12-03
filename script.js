function openAchievements(department) {
    const achievementsContent = document.getElementById('achievements-content');
    
    // Set the content based on the department clicked
    switch (department) {
        case 'it':
            achievementsContent.innerHTML = '<h2>IT Department Achievements</h2><p>List of achievements for the IT Department...</p>';
            break;
        case 'engineering':
            achievementsContent.innerHTML = '<h2>Engineering Department Achievements</h2><p>List of achievements for the Engineering Department...</p>';
            break;
        case 'science':
            achievementsContent.innerHTML = '<h2>Science Department Achievements</h2><p>List of achievements for the Science Department...</p>';
            break;
        case 'sports':
            achievementsContent.innerHTML = '<h2>Sports Department Achievements</h2><p>List of achievements for the Sports Department...</p>';
            break;
        case 'maths':
            achievementsContent.innerHTML = '<
