import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import Map from '../../components/TMap/index';
import { useDispatch } from 'react-redux';

function Main() {
    const t = useTranslations();
    const [activeNumber, setActiveNumber] = useState(0);
    const dispatch = useDispatch();
    return (
        <Map />
    );
}

export default Main;
