import React from 'react';

function RightPicture({imageURL,Title,paragraph,link1,icon}) {
    return ( 
        <>
        <div className='container mt-5 mb-5 p-5'>
            <div className='row px-5'>
               
                <div className='col-lg-6 col-md-12 px-5 mt-5'>
                     <div className='row '>
                            <h4 className='p-3 mt-5'>{Title}</h4>
                        </div>
                        <div className='row mb-5'>

                            <div>
                                <p className='opacity-75'>{paragraph}
                                </p>
                                <a href='#' class="text-decoration-none fs-5 opacity-75">{link1} <i>{icon}</i></a>
                            </div>

                        </div>
                </div>

                  <div className='col-lg-6 col-md-12 '>
                    <img src={imageURL} style={{ width: "110%" }}/>
                </div>
            </div>
        </div>
        </>
     );
}

export default RightPicture;