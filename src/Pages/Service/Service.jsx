import React from 'react'
import Breadcrumb from '../../Comman/Breadcrumb/Breadcrumb'
import Technology from '../../Comman/technology/technology'
import data from '../../Json/Service/service.json'

const Service = () => {
  // const service = Service;
  return (
    <>
       <Breadcrumb  title ="innovative It solutions"  
      detail="We offer a full spectrum of bespoke IT services designed to advance your business through enhanced efficiency, fortified security, and professional expertise. For exceptional service and to discuss how we can support your needs, please reach out to us at" 
      button="SERVICE"/> 
      <div className='container'>
        <div className='py-4'>
          <p>Welcome to Flipcode Solutions, where innovation meets expertise. Our IT services and solutions are designed to empower your business, enhance efficiency, and drive digital transformation. With a commitment to excellence, we deliver cutting-edge solutions tailored to meet the unique needs of your organization.</p>
        </div>
      </div>
      
    <div className="container">
        {data && data.length > 0 ? (
          data.map((item, index) => {
            // Render items based on even/odd index
            return (
              <div className="row py-5" key={item.id || index}>
                {index % 2 === 0 ? (
                  <>
                    <div className="col-md-5 mb-md-0 p-md-4">
                      <img src={item.photo} alt={`Image for ${item.data}`} className="card-img-top" />
                    </div>
                    <div className="col-md-7 mb-md-0 p-md-4">
                      <span dangerouslySetInnerHTML={{ __html: item.data }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-7 mb-md-0 p-md-4">
                      <span dangerouslySetInnerHTML={{ __html: item.data }} />
                    </div>
                    <div className="col-md-5 mb-md-0 p-md-4">
                      <img src={item.photo} alt={`Image for ${item.data}`} className="card-img-top" />
                    </div>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-center">No products available</p>
        )}
      </div>

      <Technology /><br /><br />
    </>
  );
}

export default Service
