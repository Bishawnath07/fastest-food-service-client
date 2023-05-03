import React, { useEffect, useState } from 'react';
import ChefCard from '../../ChefCart/ChefCard';
import Banner from '../Banner/Banner';
import BlockArticles from '../../BlockArticles/BlockArticles';
import OurMission from '../../OurMission/OurMission';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/chefs/')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))

    }, [])



    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
      const capture = document.querySelector('.actual-receipt');
      setLoader(true);
      html2canvas(capture).then((canvas)=>{
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save('receipt.pdf');
      })
    }

    return (
        <div>
            
            <Banner></Banner>
            <div className='mt-20'>
                <h1 className='text-5xl text-center my-10'>Here Are Your Favorite Chefe</h1>
                <div className='mx-20 text-center'>
                <button
                className="receipt-modal-download-button btn btn-accent mb-5"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 md:mx-20 actual-receipt'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>
            <BlockArticles></BlockArticles>
            <OurMission></OurMission>
        </div>
    );
};

export default Chefs;