// Inside your A-Frame scene initialization, if you have it
const sphere = document.querySelector('a-sphere'); // Get the sphere
sphere.addEventListener('loaded', () => { 
    console.log('Sphere loaded');
    if (sphere.components.animation) {
        console.log('Animation component is present');
    } else {
        console.error('Animation component is missing!');
    }
}); 
