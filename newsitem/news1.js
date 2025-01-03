<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>TruthWeb - Reimagine Truth</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
    <style>
      :root {
        --primary-color: #2f0139; /* Dark Violet */
        --secondary-color: #2a0132; /* Deep Black */
        --highlight-color: #ff00ff; /* Enhanced Bright Violet */
        --text-color: #fff; /* White */
        --button-color: #692119; /* Button Color */
        --hover-effect: radial-gradient(circle, #ff00ff, transparent);
      }
      body {
        background: #1a0120;
        color: var(--text-color);
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
      }
      .hero {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border: 2px solid var(--highlight-color);
        padding: 1rem;
      }
      .hero::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--hover-effect);
        opacity: 0.2;
        animation: float 6s infinite ease-in-out;
      }
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      .glow-text {
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 0 0 10px var(--highlight-color), 0 0 20px var(--highlight-color), 0 0 30px var(--highlight-color);
        animation: glow 2s infinite alternate;
      }
      @keyframes glow {
        0% {
          text-shadow: 0 0 10px var(--highlight-color), 0 0 20px var(--highlight-color), 0 0 30px var(--highlight-color);
        }
        100% {
          text-shadow: 0 0 20px var(--highlight-color), 0 0 30px var(--highlight-color), 0 0 40px var(--highlight-color);
        }
      }
      .card {
        background: var(--primary-color);
        border: 2px solid var(--highlight-color);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 0 15px var(--highlight-color);
        transition: transform 0.3s, box-shadow 0.3s;
        animation: fadeInUp 1s ease-in-out;
      }
      .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 25px var(--highlight-color);
      }
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .btn {
        background: var(--button-color);
        color: var(--text-color);
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--highlight-color);
        border-radius: 20px;
        cursor: pointer;
        transition: background 0.3s, color 0.3s;
        animation: pulse 2s infinite;
      }
      .btn:hover {
        background: var(--highlight-color);
        color: var(--primary-color);
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
      footer {
        background: var(--primary-color);
        color: var(--text-color);
        text-align: center;
        padding: 1rem;
      }
      html {
        scroll-behavior: smooth;
      }
      .sticky-header {
        position: sticky;
        top: 0;
        z-index: 50;
        background: var(--primary-color);
        transition: background 0.3s, box-shadow 0.3s;
      }
      .sticky-header.scrolled {
        background: var(--secondary-color);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      }
      .logo-text {
        font-size: 1.5rem;
        font-weight: 700;
        transition: font-size 0.3s;
      }
      .logo-text.scrolled {
        font-size: 1.25rem;
      }
      .nav-item {
        transition: transform 0.3s;
      }
      .nav-item:hover {
        transform: scale(1.1);
      }
      .fade-in {
        opacity: 0;
        animation: fadeIn 1s forwards;
      }
      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }
      .slide-in {
        transform: translateX(-100%);
        animation: slideIn 1s forwards;
      }
      @keyframes slideIn {
        to {
          transform: translateX(0);
        }
      }
      .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 500px;
        border-radius: 10px;
        animation: slideInFromTop 0.5s ease-out, fadeIn 0.5s ease-out;
      }
      @keyframes slideInFromTop {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0);
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        transition: transform 0.3s;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
        transform: rotate(90deg);
      }
      .floating-effect {
        display: inline-block;
        transition: transform 0.3s;
      }
      .floating-effect:hover {
        transform: translateY(-10px);
      }
      .nav-item {
        opacity: 0;
        animation: fadeInUp 0.5s forwards;
      }
      .nav-item:nth-child(1) {
        animation-delay: 0.1s;
      }
      .nav-item:nth-child(2) {
        animation-delay: 0.2s;
      }
      .nav-item:nth-child(3) {
        animation-delay: 0.3s;
      }
      .nav-item:nth-child(4) {
        animation-delay: 0.4s;
      }
      .nav-item:nth-child(5) {
        animation-delay: 0.5s;
      }
      .nav-item:nth-child(6) {
        animation-delay: 0.6s;
      }
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body>
    <!-- Header Section -->
    <header class="sticky-header flex justify-between items-center h-16 px-4">
        <div class="flex items-center">
            <a class="text-[var(--text-color)] mr-4 flex items-center" href="home.html">
                <span class="logo-text ml-2">TruthWeb</span>
            </a>
        </div>
        <div class="flex items-center">
            <a class="text-[var(--text-color)] mr-4 icon floating-effect" href="notifications.html">
                <i class="fas fa-bell text-xl sm:text-2xl"></i>
            </a>
            <a class="text-[var(--text-color)] mr-4 icon floating-effect" href="messages.html">
                <i class="fas fa-comments text-xl sm:text-2xl"></i>
            </a>
            <a class="text-[var(--text-color)] icon floating-effect" href="profile.html">
                <i class="fas fa-user text-xl sm:text-2xl"></i>
            </a>
        </div>
    </header>
    <!-- Navigation Section -->
    <nav class="bg-[var(--primary-color)] py-4">
        <ul class="flex flex-wrap justify-center space-x-4">
            <li class="nav-item">
                <a class="text-[var(--text-color)] hover:text-[var(--highlight-color)] floating-effect" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="text-[var(--text-color)] hover:text-[var(--highlight-color)] floating-effect" href="discover.html" id="openModalButton">Discover</a>
            </li>
            <li class="nav-item">
                <a class="text-[var(--text-color)] hover:text-[var(--highlight-color)] floating-effect" href="about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="text-[var(--text-color)] hover:text-[var(--highlight-color)] floating-effect" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="text-[var(--text-color)] hover:text-[var(--highlight-color)] floating-effect" href="policy.html">Policy</a>
            </li>
        </ul>
    </nav>
<!-- News Content Section -->
    <section class="py-12">
        <div class="container mx-auto px-4">
            <div class="card">
                <img alt="News image 1: A detailed description of the image for AI generation" class="w-full h-64 object-cover rounded-t-lg" height="400" src="https://storage.googleapis.com/a1aa/image/gJopfZUoeNu2VEw97t2ZGML9XGY7JdA4LLFUUYUe6inPPXfPB.jpg" width="600"/>
                <div class="p-4">
                    <h1 class="text-3xl font-bold mb-4">News Title 1</h1>
                    <p class="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <p class="text-lg mb-4">Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>
                    <p class="text-lg mb-4">Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.</p>
                    <p class="text-lg mb-4">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.</p>
                    <p class="text-lg mb-4">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales.</p>
                </div>
            </div>
        </div>
    </div>
</section>



    <!-- Footer Section -->
    <footer class="bg-[var(--primary-color)] py-8">
      <div class="container mx-auto text-center">
        <div class="mb-4">
          <a class="text-[var(--text-color)] mx-2 floating-effect" href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a class="text-[var(--text-color)] mx-2 floating-effect" href="https://www.x.com" target="_blank"><i class="fab fa-twitter"></i></a>
          <a class="text-[var(--text-color)] mx-2 floating-effect" href="https://www.telegram.com" target="_blank"><i class="fab fa-telegram"></i></a>
          <a class="text-[var(--text-color)] mx-2 floating-effect" href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
        <p class="text-[var(--text-color)] mb-4">© 2024 TruthWeb. All rights reserved.</p>
        <p class="text-[var(--text-color)]">Designed by Reimagine Truth Organization</p>
      </div>
    </footer>

 <!-- Modal -->
    <div id="modal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center hidden">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold text-black">More Options</h2>
          <button id="closeModal" class="text-gray-700 hover:text-red-500 transition-transform duration-300">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <ul class="space-y-4">
          <li><a href="wiki.html" class="text-gray-700 hover:text-blue-500"><i class="fas fa-book mr-2"></i>Wiki</a></li>
          <li><a href="whitepaper.html" class="text-gray-700 hover:text-blue-500"><i class="fas fa-file-alt mr-2"></i>Whitepaper</a></li>
          <li><a href="airdrop.html" class="text-gray-700 hover:text-blue-500"><i class="fas fa-gift mr-2"></i>Airdrop</a></li>
          <li><a href="listing.html" class="text-gray-700 hover:text-blue-500"><i class="fas fa-list mr-2"></i>Listing</a></li>
          <li><a href="rto-token.html" class="text-gray-700 hover:text-blue-500"><i class="fas fa-coins mr-2"></i>RTO Token</a></li>
          <li><a href="news.html" class="text-gray-700 hover:text-blue-500"><i class="fas fa-newspaper mr-2"></i>News</a></li>
        </ul>
      </div>
    </div>

    <script>
      document.getElementById('openModalButton').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('modal').classList.remove('hidden');
      });

      document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('modal').classList.add('hidden');
      });

      window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('modal')) {
          document.getElementById('modal').classList.add('hidden');
        }
      });
    </script>
  </body>
</html>
