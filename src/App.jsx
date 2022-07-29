import { useEffect, useState } from 'react';
import SearchList from './components/SearchList';
import blogData from './data/blogData';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 100,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 50,
});
AOS.refresh();

function App() {
  const [postData, setPostData] = useState([]);

  const handleChange = (e) => {
    const filteredPost = postData.filter((post) => {
      return post.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    if (e.target.value === '') {
      return setPostData(blogData);
    } else {
      return setPostData(filteredPost);
    }
  };

  useEffect(() => {
    setPostData(() => blogData);
  }, []);

  return (
    <>
      <header className="py-10 px-auto bg-gradient-to-l to-blue-500 from-indigo-500">
        <div className=" container space-y-10">
          <div className="w-full flex justify-between">
            <h1 className="text-lg lg:text-2xl text-white">Codelândia</h1>
            <span className="text-lg lg:text-2xl text-white">blog</span>
          </div>

          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-white bg-white/20 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-white/50 "
                placeholder="Pesquisar no blog"
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>
      </header>
      <main>
        <SearchList filteredPost={postData} />
      </main>
    </>
  );
}

export default App;
