// ==========================================
// PROMPTHUB: FINAL STABLE JAVASCRIPT
// ==========================================

// 1. App State
const appState = {
    currentCategory: 'all',
    searchQuery: '',
};

// 2. The Database (Updated with working images)
const promptData = [
    { 
        id: 1, 
        title: "Cyberpunk Samurai", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80", 
        prompt: "A futuristic samurai standing in Neo-Tokyo, rain hitting the armor, neon pink lights, 8k resolution, cinematic lighting.", 
        views: "5.2k", 
        likes: 1200 
    },
    { 
        id: 2, 
        title: "Cute 3D Robot", 
        category: "dall-e 3", 
        image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80", 
        prompt: "A small cute 3D robot holding a sunflower, Pixar style animation, soft lighting, pastel colors, high detail.", 
        views: "8.9k", 
        likes: 2100 
    },
    { 
        id: 3, 
        title: "Modern Minimalist Villa", 
        category: "stable diffusion", 
        image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=600&q=80", 
        prompt: "Brutalist architecture villa, large glass windows, desert oasis, swimming pool, sunset lighting, sharp focus.", 
        views: "10k", 
        likes: 4200 
    },
    { 
        id: 4, 
        title: "Glass Animal Sculpture", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80", 
        prompt: "A transparent glass lion sculpture filled with galaxy nebula, intricate details, hyper-realistic, studio lighting.", 
        views: "3.1k", 
        likes: 850 
    },
    { 
        id: 5, 
        title: "Cat Astronaut", 
        category: "dall-e 3", 
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=600&q=80", 
        prompt: "A fluffy white cat wearing a NASA spacesuit, floating in a space station, looking out the window.", 
        views: "12k", 
        likes: 5600 
    },
    { 
        id: 6, 
        title: "Steampunk City", 
        category: "dall-e 3", 
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", 
        prompt: "A flying steampunk city in the clouds, brass pipes, steam engines, Victorian architecture, golden hour.", 
        views: "1.2k", 
        likes: 320 
    },
    { 
        id: 7, 
        title: "Ancient Tree of Life", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80", 
        prompt: "Glowing ancient tree with golden leaves, magical forest, floating particles, dreamlike atmosphere, unreal engine 5 render.", 
        views: "4.5k", 
        likes: 900 
    },
        // --- ADDITIONAL PROMPTS ---
    { 
        id: 16, 
        title: "Neon Cyber-Wolf", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", 
        prompt: "A robotic wolf with neon blue glowing veins, walking through a digital forest, cyberpunk aesthetic, synthwave colors, 8k.", 
        views: "4.1k", 
        likes: 950 
    },
    { 
        id: 17, 
        title: "Floating Zen Garden", 
        category: "dall-e 3", 
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=600&q=80", 
        prompt: "A floating Japanese Zen garden in the sky, waterfalls falling into clouds, cherry blossom trees, peaceful atmosphere, high detail.", 
        views: "2.9k", 
        likes: 610 
    },
    { 
        id: 18, 
        title: "Retro Space Helmet", 
        category: "stable diffusion", 
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80", 
        prompt: "Vintage 1960s space helmet reflecting a colorful nebula, cinematic lighting, grain texture, nostalgic sci-fi style.", 
        views: "1.5k", 
        likes: 340 
    },
    { 
        id: 19, 
        title: "Mechanical Watch Heart", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=600&q=80", 
        prompt: "A human heart made entirely of clockwork gears and gold springs, steam hissing, intricate mechanical engineering, macro shot.", 
        views: "6.7k", 
        likes: 1800 
    },
    { 
        id: 20, 
        title: "Ice Dragon Throne", 
        category: "dall-e 3", 
        image: "https://images.unsplash.com/photo-1519373330693-e40424ecac41?auto=format&fit=crop&w=600&q=80", 
        prompt: "A throne made of sharp blue ice inside a frozen cavern, glowing crystals, Game of Thrones style, majestic, cold atmosphere.", 
        views: "3.3k", 
        likes: 720 
    },
    { 
        id: 21, 
        title: "Futuristic Sneaker Concept", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80", 
        prompt: "Advanced tech-wear sneaker, carbon fiber materials, glowing LED strips, floating above a tech background, product design.", 
        views: "9.2k", 
        likes: 2500 
    },
    { 
        id: 22, 
        title: "Magical Potion Bottle", 
        category: "stable diffusion", 
        image: "https://images.unsplash.com/photo-1527067829737-402994eda8b5?auto=format&fit=crop&w=600&q=80", 
        prompt: "A glowing purple potion in a glass bottle, swirling magical smoke inside, fantasy RPG style, wooden table, soft bokeh.", 
        views: "5.1k", 
        likes: 1100 
    },
    { 
        id: 23, 
        title: "Neon Ramen Shop", 
        category: "midjourney", 
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80", 
        prompt: "Cozy Japanese ramen shop at night, glowing neon signs, rain outside, cinematic colors, anime aesthetic like Your Name.", 
        views: "11k", 
        likes: 3800 
    }

];

// 3. Selectors
const searchInput = document.getElementById('mainSearch');
const promptsGrid = document.getElementById('promptsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('submitModal');
const toastContainer = document.getElementById('toastContainer');

// 4. Render Function
const renderPrompts = (data) => {
    if (!promptsGrid) return;
    promptsGrid.innerHTML = '';
    
    data.forEach(item => {
        const cardHTML = `
            <div class="prompt-card" data-category="${item.category}">
                <div class="card-image-wrapper">
                    <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.src='https://placehold.co/600x400?text=AI+Image'">
                    <div class="card-overlay"><span class="badge">${item.category.toUpperCase()}</span></div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-prompt-text">"${item.prompt}"</p>
                    <div class="card-footer">
                        <div class="stats"><span>👁️ ${item.views}</span><span>❤️ ${item.likes}</span></div>
                        <button class="copy-btn" onclick="copyPrompt(this)">Copy Prompt</button>
                    </div>
                </div>
            </div>
        `;
        promptsGrid.innerHTML += cardHTML;
    });
};

// 5. Filter Engine
const filterEngine = () => {
    const term = searchInput ? searchInput.value.toLowerCase() : "";
    const cat = appState.currentCategory;
    
    const filtered = promptData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(term);
        const promptMatch = item.prompt.toLowerCase().includes(term);
        const catMatch = (cat === 'all' || cat === 'all prompts' || item.category === cat);
        return (titleMatch || promptMatch) && catMatch;
    });

    renderPrompts(filtered);
    
    const noResults = document.getElementById('noResults');
    if (noResults) noResults.classList.toggle('hidden', filtered.length > 0);
};

// 6. Global Copy Function
window.copyPrompt = (button) => {
    const card = button.closest('.prompt-card');
    const text = card.querySelector('.card-prompt-text').innerText.replace(/"/g, '');
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerText;
        button.innerText = "Copied! ✨";
        showToast("Prompt copied to clipboard!");
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    }).catch(err => console.error('Error copying text: ', err));
};

// 7. Toast Function
const showToast = (msg) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<span>✨</span> ${msg}`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
};

// 8. Stats Counter Animation
const runCounters = () => {
    document.querySelectorAll('.stat-number').forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        let count = 0;
        const inc = target / 50;
        const timer = setInterval(() => {
            count += inc;
            if(count >= target) {
                num.innerText = target + "+";
                clearInterval(timer);
            } else {
                num.innerText = Math.ceil(count);
            }
        }, 30);
    });
};

// 9. Event Listeners
if(searchInput) {
    searchInput.addEventListener('input', filterEngine);
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        appState.currentCategory = this.innerText.toLowerCase();
        filterEngine();
    });
});

// Modal Controls
const submitBtn = document.querySelector('.btn-primary');
if (submitBtn) {
    submitBtn.onclick = () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };
}

const closeBtn = document.getElementById('closeModal');
if (closeBtn) {
    closeBtn.onclick = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };
}

// 10. Start App
window.onload = () => {
    renderPrompts(promptData);
    runCounters();
    console.log("Website Ready with Images! 🚀");
};

window.scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
