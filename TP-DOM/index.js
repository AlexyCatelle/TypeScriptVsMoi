        let currentTheme = 'light';
        let selectedDescription = '';
        let currentDescriptionIndex = -1;
        let selectedAvatar = null;
        let isValidPseudo = false;

              const descriptions = [
            "If Hell is forever than Heaven must be a lie. - Charlie",
            "My daughter wants to see me! TAKE THAT, DEPRESSION! - Lucifer", 
            "Sometimes I kill mother bugs in front of their children as a warning to others! - Niffty" ,
        ];

        // DOM Elements
        const body = document.body;
        const changeDescriptionBtn = document.getElementById('change-description');
const descriptionText = document.getElementById('description-text');
        changeDescriptionBtn.addEventListener('click', changeDescription);

        function changeDescription() {
            console.log('Changement de description...');
            
            let newIndex;
            
            // Éviter la répétition immédiate
            do {
                newIndex = Math.floor(Math.random() * descriptions.length);
            } while (newIndex === currentDescriptionIndex && descriptions.length > 1);
            
            currentDescriptionIndex = newIndex;
            selectedDescription = descriptions[newIndex];
            descriptionText.textContent = selectedDescription;
            
            
            console.log(`Nouvelle description: ${selectedDescription}`);
        }

        changeDescription();
    