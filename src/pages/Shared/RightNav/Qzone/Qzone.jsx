import React from 'react';
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-light py-4 px-2 mb-4 text-center'>
                <h4>Qzone</h4>
                <img className='p-3 img-fluid' src={qzone1} alt="" />
                <img className='p-3 img-fluid' src={qzone2} alt="" />
                <img className='p-3 img-fluid' src={qzone3} alt="" />
            </div>
    );
};

export default Qzone;