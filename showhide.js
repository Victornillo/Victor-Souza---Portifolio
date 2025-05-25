        function showContent(step) {
            // Hide all content sections
            var contentSections = document.querySelectorAll('.section-content');
            contentSections.forEach(function (section) {
                section.classList.remove('active');
            });

            // Show the selected content section
            var selectedContent = document.querySelector('.section-content[data-step="' + step + '"]');
            selectedContent.classList.add('active');
        }

        