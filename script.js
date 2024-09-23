function changeoftext()
{
    const aboutMetTexts = ["Video Editor", "Beginner Coder", "Developing Enthusiastic"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.abtme');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMetTexts[textIndex];
        if (!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        else if (isDeleting && charIndex > 0)
        {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }
        else
        {
            isDeleting = !isDeleting;
            if(!isDeleting) {
                textIndex = (textIndex + 1) % aboutMetTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();
}


function changeofskills()
{
    const aboutMetTexts = ["Video Editing", "Coding", "Photography"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.skill');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typen() {
        const currentText = aboutMetTexts[textIndex];
        if (!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(typen, typingSpeed);
        }
        else if (isDeleting && charIndex > 0)
        {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typen, eraseSpeed);
        }
        else
        {
            isDeleting = !isDeleting;
            if(!isDeleting) {
                textIndex = (textIndex + 1) % aboutMetTexts.length;
            }
            setTimeout(typen, pauseTime);
        }
    }
    typen();
}

document.addEventListener('DOMContentLoaded', function () {
    const darkMode = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkMode.querySelector('i').classList.toggle('fa-sun');
        darkMode.querySelector('i').classList.toggle('fa-moon');
        darkMode.querySelector('i').classList.toggle('dark-mode');

    });
});


changeoftext();
changeofskills();

let observer;

document.addEventListener('DOMContentLoaded', function() {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector('.progress-bar');
        const progress = progressBar.dataset.progress;

        progressBar.style.setProperty('--progress', `${progress}%`);
        progressBar.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  });

  const codinglang = document.querySelectorAll('#coding-lang .prog');
  codinglang.forEach(prog => {
    observer.observe(prog);
  });
});

/**

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;

                progressBar.style.setProperty('--progress', `${progress}%`);
                progressBar.classList.add('animated');
                observer.unobserve(entry.target);
            }
    });
});

    const codinglang = document.querySelectorAll('#coding-lang .prog');
    codinglang.forEach(prog => {
        observer.observe(prog);
    });
});
 */


/** 

*/