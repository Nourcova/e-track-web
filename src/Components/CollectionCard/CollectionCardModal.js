import React from 'react';
import Bin from '../../assets/icons/Bin.png';
import Tag from '../../assets/icons/price-tag 1.png';
import Star from '../../assets/icons/Star1.png';
import FullStar from '../../assets/icons/Star.png';
import Close from '../../assets/icons/Close.png';
import Img from '../../assets/icons/image 22.png';
import collection from '../../Constants/collection.js';

export default function CollectionCardModal({ card, setShowModal }) {
  const type = collection.find((el) => el.id===card.type.id)
      return (
        
           <div>
              <div
                className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-5/12 h-6/12 my-6 mx-auto max-w-3xl modal-overlay">
                  <div className=" rounded-lg h-full shadow-lg relative modal-close flex flex-col w-full text-center bg-white outline-none focus:outline-none">
                    <div className=" items-start justify-between px-20 py-8 h-60 rounded-t modal-content">
                      <h3 className="text-3xl font-semibold">
                        
                        {card.date}
                      </h3> 
                      <h5 className="text-1xl font-light my-1">
                      {type.name}
                      </h5>                                                
                       <p className="my-4 text-gray-600 text-lg leading-relaxed font-semibold">
                     
                     {card.text}

                      </p>
                    </div>
                   
                    
                    <div className="flex p-6  rounded-b items-center">
                     <div className="flex justify-start">
                     <button
                        className="background-transparent  font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                       >
                        {<img src={card.starred?FullStar:Star} alt="star" />}
                       </button>

                      <button
                        className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                       >
                        {<img src={Img} alt="img" />}
                       </button>

                       <button
                        className="background-transparent  font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                       >
                        {<img src={Tag} alt="tag" />}
                       </button>
                     
                       <button
                        className="background-transparent  font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                       >
                        {<img src={Bin} alt="delete" />}
                       </button>
                     </div>

                     <div className="absolute right-0">
                      <button
                        className="background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => setShowModal(false)}
                      >
                        {<img src={Close} alt="close" />}
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-gray-300"></div>
            </div>
          
        
      );
    }
