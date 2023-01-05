import React from 'react'

const MapCart = ({cartItem, priceState, locatetologin, removefroCart}) => {
  return (
    <div className="media-items p-2 accordion-collapse collapse" id="collapseC1" data-bs-parent="#accordionTest">
              <div className="accordion items border mb-2" id="accordionExample">

                {!cartItem ? <><h1>Loading... Please Wait</h1></> : <>
                  {cartItem.map((item) => (
                    <>
                      {item.isDelete == 0 ? <>
                        <div className="accordion-item">
                          <div
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className="row m-0">
                              <p className="my-2">
                                {item.page_title.substring(
                                  0,
                                  20
                                ) + "..."}
                              </p>
                              <div className="col-xl-4 col-lg-12 col-md-12 col-sm-6 map-media-items">
                                <img
                                  src={item.thumb.startsWith("https") ? item.thumb :`https://${(item.mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}.odoads.com/media/${(item.mediaownercompanyname.trim().split(' ').slice(0, 2).join('_')).toLowerCase()}/media/images/new${item.thumb}`}
                                  alt="N/A"
                                  className="w-100 mt-2 pt-2"
                                />
                              </div>
                              <div className="col-xl-8 col-lg-12 col-md-12 col-sm-6">
                                <ul className="list-unstyled">
                                  <li>Code : {item.code}</li>
                                  <li>FTF : {item.ftf}</li>
                                  <li>Size : {item.size} feet</li>
                                  <li>
                                    Price: {item.price}
                                  </li>
                                </ul>
                                <button className="mb-2" onClick={() => removefroCart(item)}>from Cart</button>
                              </div>

                            </div>

                          </div>
                        </div>
                      </> : <>
                        <h6 className="text-center">Your Item Deleted Successfully</h6>
                      </>}

                    </>
                  ))}
                </>}
              </div>
            </div>
  )
}

export default MapCart