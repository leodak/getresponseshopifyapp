import React, { useEffect, useState} from "react";
import { Select } from "@shopify/polaris";

const NewContactSignUp = () => {
    const [getRespCampaigns, setCampaigns] = useState({});
    const [selected, setSelected] = useState(0);

    const headers = { 
        'Content-Type': 'application/json',
        'X-Auth-Token': 'api-key xbyfn9t9akcwoomzsgighrrj61z3x07g'
     }

    var fetchInit = {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }

    const getCampaigns = () => {
        fetch('https://api.getresponse.com/v3/campaigns', { headers })
        .then(response => response.json())
        .then(data => {
            setCampaigns(data); 
            console.log(data);
        });
    }

    const handleSelectChange = useCallback((value) => console.log(value), []);
    

    useEffect(() => {
        getCampaigns();
    });

    return (
        <>
        <Select options={getRespCampaigns} 
        label="Campaigns List"
        onChange={handleSelectChange}
        value={selected}
        />
        </>
    )
};

export default NewContactSignUp;