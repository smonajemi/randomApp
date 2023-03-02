import React from 'react';
import { IonSpinner } from '@ionic/react';

const Spinner = () => {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <IonSpinner></IonSpinner>
    </div>
    );
    }
    
export default Spinner;


