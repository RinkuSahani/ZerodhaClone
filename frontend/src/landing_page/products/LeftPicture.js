import React from 'react';

function LeftPicture({ imageLink, title, paraText, link1, link2,icon
}) {
    return (
        <>
            <div class="container mt-5 mb-5 p-5">
                <div className='row px-5' >
                    <div className='col-lg-6 col-md-12 ' >
                        <img src={imageLink} style={{ width: "95%" }} alt='Trophy' />
                    </div>
                    <div className='col-lg-6 col-md-12 px-5 mt-4'>
                        <div className='row '>
                            <h4 className='p-3'>{title}</h4>
                        </div>
                        <div className='row mb-5'>

                            <div>
                                <p className='opacity-75'>{paraText}
                                </p>
                                <a href='#' class="text-decoration-none fs-5 opacity-75">{link1} <i>{icon}</i></a>
                            </div>

                        </div>

                        <div className='row'>
                            
                                <img src='/media/images/googlePlayBadge.svg' style={{width:"11rem"}} title='googleBadge'/>
                           
                       
                                <img src='/media/images/appstoreBadge.svg' style={{width:"11rem"}} title='appStore' />
                     
                            
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftPicture;