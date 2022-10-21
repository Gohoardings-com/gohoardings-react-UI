import React from 'react'

const MediaFilter = () => {
  return (
    <div className='col-sm-2 col-12 pb-5 border-top  border-white'>
                {/* <!-- Selcted Location --> */}
                <div className='col mt-3 text-white'>
                    <h5 className='text-uppercase text-white'>Selcted Location(847)</h5>
                    <h6 className='font-italic text-white'>Choose Where to display on Hoardings category pages.</h6>
                    <select className='select form-select text-white-50 text-white-50 rounded'
                        aria-label='Default select example'>
                        <option selected>Selected Location</option>
                    </select>
                </div>
                {/* <!-- Sub Category(33) --> */}
                <div className='col mt-5 text-white' >
                    <h5 className='text-uppercase text-white text-white'>Sub Category(33)</h5>
                    <h6 className='font-italic text-white text-white'>Choose What to display in Sub-Catgeory.</h6>
                    <div className='rowCheck row text-white-50 m-1 p-1'>
                        <li className='w-100'>
                            <input className='ms-2 ' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                    </div>
                </div>
                {/* <!-- ILLUMINATION(6) --> */}
                <div className='col mt-5 text-white' >
                    <h5 className='text-uppercase text-white'>ILLUMINATION(6)</h5>
                    <h6 className='font-italic text-white'>Choose to display type of ILLUMINATION</h6>
                    <div className='rowCheck row text-white-50 ms-1 p-1'>
                        <li className='w-100 '>
                            <input className='ms-2 ' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                          <li className='w-100'>
                            <input className='ms-2' type='checkbox'></input>
                            <span className='ms-3'>UniPole</span>
                        </li>
                    </div>
                </div>

                {/* <!-- Products per row --> */}
                <div className='col mt-5 text-white' >
                    <h5 className='text-uppercase text-white'>Products per row</h5>
                    <h6 className='font-italic text-white'>How many Products should be shown per now</h6>
                    <select className='select form-select text-white-50 text-white-50 rounded'
                        aria-label='Default select example'>
                        <option selected>3</option>
                    </select>
                </div>

                {/* <!-- Rows per row --> */}
                <div className='col mt-5 text-white'>
                    <h5 className='text-uppercase text-white'>Rows per row</h5>
                    <h6 className='font-italic text-white'>How many Products should be shown per now</h6>
                    <select className='select form-select text-white-50 text-white-50 rounded'
                        aria-label='Default select example'>
                        <option selected>4</option>
                    </select>
                </div>
            </div>
  )
}

export default MediaFilter
