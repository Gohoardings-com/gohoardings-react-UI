import React from 'react'

const Medias = () => {
  return (
   <>
    <span
                  className="input-group-text border-0 pe-1"
                  id="basic-addon1"
                >

                  {/* Select Media Category */}
                  <select   className="form-control hide-focus border-0 text-white py-2"
                >
                  <option className="text-dark" value="None">None</option>
                  <option className="text-dark" value="traditional-ooh-media">
                    Traditional Ooh Media
                  </option>
                  <option className="text-dark" value="digital-media">Digital Media</option>
                  <option className="text-dark" value="transit-media">Transit-Media</option>
                  <option className="text-dark" value="mall-media">Mall Media</option>
                  <option className="text-dark" value="airport-media">Airport Media</option>
                  <option className="text-dark" value="inflight_media">Inflight Media</option>
                  <option className="text-dark" value="office-media">Office Media</option>
                </select>
                  {/* <img src="./images/search.svg" alt="" /> */}
                </span>
   </>
  )
}

export default Medias
