function openSidebar() {
    const sidebar = document.querySelector('.sidebar') ;
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const targetBlock = document.querySelector('.main__inner');

const block = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}))

block.observe(targetBlock);

const tagetWorkBlock = document.querySelector('.work__inner');

const blockTwo = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}))

blockTwo.observe(tagetWorkBlock);

const tagetCollectBlock = document.querySelector('.collection__inner');

const fourBlock = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}))

fourBlock.observe(tagetCollectBlock);