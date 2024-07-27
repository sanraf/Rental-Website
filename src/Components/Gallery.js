import React, { useEffect, useState } from 'react'
import '../Styles/Gallery.css'
import logo from '../Assets/logo4.png'
import chair from '../Assets/stack-chairs.jpg';
import chair2 from '../Assets/chair1.jpg';
import tent1 from '../Assets/tent-event.jpeg';
import tent2 from '../Assets/tent-event2.jpeg';
import tent3 from '../Assets/welcome-tent.jpeg';
import table1 from '../Assets/tables.jpg';
import grass1 from '../Assets/artificial-grass.jpeg'
import grass2 from '../Assets/artificial-grass2.jpeg'
import cover1 from '../Assets/chair-covers.jpeg'
import cover2 from '../Assets/chair-covers1.jpeg'

import ReactPaginate from 'react-paginate';

function Gallery() {


  const [itemsPerPage,setItemsPerPage] = useState(3);
  const[width,setWidth] = useState(0)
  // const [currentItems,setCurrentItems] = useState([]);
  // const [pageCount,setPageCount] = useState(0)

    const images = [
        {
          src: tent2,
          title: 'Tent Model 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          src: chair,
          title: 'Plastic chairs Model 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          src: table1,
          title: 'Table  Model 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          src: table1,
          title: 'TableModel 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          src: cover1,
          title: 'Chairs Cover Model 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
          src: grass1,
          title: 'Artificial Grass Model 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        }
      ];


        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
      
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
      
          const endOffset = itemOffset + itemsPerPage;
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          const currentItems = images.slice(itemOffset, endOffset);
          const pageCount = Math.ceil(images.length / itemsPerPage);


      
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % images.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        };

        window.addEventListener('resize', function(event) {
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          if(window.innerWidth<760){
            setItemsPerPage(1);
          }else if(window.innerWidth<927){
            setItemsPerPage(2);
          }else{
            setItemsPerPage(3);
          }
          setWidth(window.innerWidth);
          // Do something with the updated screen dimensions
          console.log(`Screen width: ${screenWidth}px, Screen height: ${screenHeight}px`);
        });
  return (

    <div className="gallery-wrapper">
        <div className="line_logo">
        <hr/>
        <img src={logo} alt=''/>
        <hr/>
      </div>

      <h1>Our Gallery And Product </h1>
        <div className="image-grid">
            {currentItems.map((image,index)=>(

                <div className="image-item" key={index}>
                  <img src={image.src} alt= {image.title} />
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <button>See Collection</button>
            

              </div>

            ))}
        
      
        </div>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
            breakLinkClassName="break"
          />
          <hr/>
    </div>

  );
}
export default Gallery