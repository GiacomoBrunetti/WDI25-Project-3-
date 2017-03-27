const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Resource = require('../models/resource');

Resource.collection.drop();

Resource
  .create([{
    name: 'One Support - Mornington Crescent',
    type: 'Accommodation',
    website: 'http://www.homeless.org.uk/homeless-england/service/one-support-mornington-crescent',
    telephone: '020 7383 0465',
    address: '20 Mornington Crescent, London, NW1 7RG'
  }, {
    name: 'Camden Health Improvement Practice',
    type: 'Health Service',
    website: 'http://www.homeless.org.uk/homeless-england/service/camden-health-improvement-practice',
    telephone: '020 3317 6075',
    address: 'The Margarete Centre, 108 Hampstead Road, London, NW1 2LS'
  }, {
    name: 'SHP - Arlington Road',
    type: 'Accommodation',
    website: 'http://www.homeless.org.uk/homeless-england/service/shp-arlington-road',
    telephone: '020 7387 3879',
    address: '88 Arlington Road, London, NW1 7HT'
  }, {
    name: 'One Support - Drummond Street',
    type: 'Accommodation',
    website: 'http://www.homeless.org.uk/homeless-england/service/one-support-drummond-street',
    telephone: '020 7383 0465',
    address: '108 Drummond Street, London, NW1 2HN'
  }, {
    name: 'The London Pathway',
    type: 'Health Service',
    website: 'http://www.homeless.org.uk/homeless-england/service/london-pathway',
    telephone: '020 3447 9351',
    address: 'c/o UCLH Charity, 5th Floor East, 250 Euston Road, London, NW1 2PG'
  }, {
    name: 'Thames Reach - Spectrum Centre',
    type: 'Day Centre',
    website: 'http://www.homeless.org.uk/homeless-england/service/thames-reach-spectrum-centre',
    telephone: '020 7267 4937',
    address: '6- 8 Greenland Street, London, NW1 0ND'
  }, {
    name: 'Focus Homeless Outreach Team',
    type: 'Advice',
    website: 'http://www.homeless.org.uk/homeless-england/service/focus-homeless-outreach-team',
    telephone: '020 3317 6590',
    address: '4 Greenland Road, London, NW1 0AS'
  }, {
    name: 'One Support - Arlington',
    type: 'Accommodation',
    website: 'http://www.homeless.org.uk/homeless-england/service/one-support-arlington',
    telephone: '020 7974 5801',
    address: '220 Arlington Road, London, NW1 7HE'
  }, {
    name: 'St Mungo\'s - St Pancras Way',
    type: 'Accommodation',
    website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-st-pancras-way',
    telephone: '020 7383 2748',
    address: '9 St Pancras Way, London, NW1 0PB'
  // }, {
  //   name: 'New Horizon Youth Centre',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/new-horizon-youth-centre',
  //   telephone: '020 7388 5580',
  //   address: '68 Chalton Street, London, NW1 1JR'
  // }, {
  //   name: 'St Mungo\'s - Endsleigh Gardens',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-endsleigh-gardens',
  //   telephone: '020 7380 3600',
  //   address: 'WC1H 0EH'
  // }, {
  //   name: 'St Mungo\'s - Adamson Road',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-adamson-road',
  //   telephone: '020 7974 1410',
  //   address: 'WC1H 9BF'
  // }, {
  //   name: 'St Mungo\'s - Argyle Walk',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-argyle-walk',
  //   telephone: '020 7278 7690',
  //   address: 'WC1H 9BF'
  // }, {
  //   name: 'Depaul UK - Drive Ahead Project',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/depaul-uk-drive-ahead-project',
  //   telephone: '020 7224 0593',
  //   address: 'W1U 3QZ'
  // }, {
  //   name: 'LB Camden - Housing Options & Advice Service',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-camden-housing-options-advice-service',
  //   telephone: '020 7974 4444',
  //   address: 'N1C 4AG'
  // }, {
  //   name: 'Holy Cross Centre Trust',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/holy-cross-centre-trust',
  //   telephone: '020 7278 4437',
  //   address: 'WC1H 8JU'
  // }, {
  //   name: 'Salvation Army - Cambria House',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/salvation-army-cambria-house',
  //   telephone: '020 7841 0230',
  //   address: 'WC1N 1BJ'
  // }, {
  //   name: 'St Mungo\'s - Argyle Street',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-argyle-street',
  //   telephone: '020 7278 7382',
  //   address: 'WC1H 8ER'
  // }, {
  //   name: 'Women at the Well',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/women-at-well',
  //   telephone: '020 7520 1710',
  //   address: 'WC1H 8BB'
  // }, {
  //   name: 'St Mungo\'s - Birkenhead Street',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-birkenhead-street',
  //   telephone: '020 7841 7140',
  //   address: 'WC1H 8BA'
  // }, {
  //   name: 'Kings Cross Primary Health Care Centre',
  //   type: 'Health Service',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/kings-cross-primary-health-care-centre',
  //   telephone: '020 3317 6075',
  //   address: 'N1 9JY'
  // }, {
  //   name: 'SHP - Frederick Street',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shp-frederick-street',
  //   telephone: '020 3701 5947',
  //   address: 'WC1X 0NG'
  // }, {
  //   name: 'SHP - Dennis Handfield House',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shp-dennis-handfield-house',
  //   telephone: '020 7833 0386',
  //   address: 'WC1X 9LP'
  // }, {
  //   name: 'Kings Cross Christian Centre',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/kings-cross-christian-centre',
  //   telephone: '020 7837 3976',
  //   address: 'WC1X 9EW'
  // }, {
  //   name: 'Viridian - Helen Graham House(Support)',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/viridian-helen-graham-house-support',
  //   telephone: '020 7405 2177',
  //   address: 'WC1B 3BA'
  // }, {
  //   name: 'Get Connected',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/get-connected',
  //   telephone: '0808 808 4994',
  //   address: 'W1A 5PD'
  // }, {
  //   name: 'All Saints Church Islington',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/all-saints-church-islington',
  //   telephone: '020 7837 0720',
  //   address: 'N1 9QW'
  // }, {
  //   name: 'St Mungo\'s - Endell Street',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-endell-street',
  //   telephone: '020 7632 4000',
  //   address: 'WC2H 9DN'
  // }, {
  //   name: 'London Jesus Centre',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/london-jesus-centre',
  //   telephone: '0845 8333 005',
  //   address: 'W1W 8TB'
  // }, {
  //   name: 'St Mungo\'s - The Lodge at St Ursula\'s',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-lodge-at-st-ursulas',
  //   telephone: '020 7242 7372',
  //   address: 'EC1N 7RB'
  // }, {
  //   name: 'Great Chapel Street Medical Centre',
  //   type: 'Health Service',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/great-chapel-street-medical-centre',
  //   telephone: '020 7437 9360',
  //   address: 'W1F 8FL'
  // }, {
  //   name: 'Thames Reach - Stafford House',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/thames-reach-stafford-house',
  //   telephone: '020 7534 6711',
  //   address: 'W1D 3HZ'
  // }, {
  //   name: 'Centrepoint - Berwick Street',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/centrepoint-berwick-street',
  //   telephone: '020 7423 6839',
  //   address: 'W1F 8RF'
  // }, {
  //   name: 'Connection at St Martin\'s (Adults Services)',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/connection-at-st-martins-adults-services',
  //   telephone: '020 7766 5544',
  //   address: 'WC2N 4HW'
  // }, {
  //   name: 'Connection at St Martin\'s (Young People\'s Services)',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/connection-at-st-martins-young-peoples-services',
  //   telephone: '020 7766 5544',
  //   address: 'WC2N 4HW'
  // }, {
  //   name: 'Connection at St Martin\'s - Advice and Housing Team',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/connection-at-st-martins-advice-and-housing-team',
  //   telephone: '020 7766 5556',
  //   address: 'WC2N 4HW'
  // }, {
  //   name: 'Connection at St Martin\'s - Workspace',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/connection-at-st-martins-workspace',
  //   telephone: '020 7766 5547',
  //   address: 'WC2N 4HW'
  // }, {
  //   name: 'Salvation Army - Regent Hall Homelessness Services',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/salvation-army-regent-hall-homelessness-services',
  //   telephone: '020 7629 5424',
  //   address: 'W1B 2LH'
  // }, {
  //   name: 'Centrepoint - Bruce House Foyer',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/centrepoint-bruce-house-foyer',
  //   telephone: '020 7557 4500',
  //   address: 'WC2B 5SU'
  // }, {
  //   name: 'Centrepoint - Westminster HSDT',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/centrepoint-westminster-hsdt',
  //   telephone: '020 7557 4500',
  //   address: 'WC2B 5SU'
  // }, {
  //   name: 'LGBT Jigsaw',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lgbt-jigsaw',
  //   telephone: '078 1471 9623',
  //   address: 'N1 3QX'
  // }, {
  //   name: 'Smart Works',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/smart-works',
  //   telephone: '020 7288 1770',
  //   address: 'N1 3DF'
  // }, {
  //   name: 'Stonewall Housing',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/stonewall-housing',
  //   telephone: '020 7359 6242',
  //   address: 'N1 3QP'
  // }, {
  //   name: 'Stonewall Housing Advice Line',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/stonewall-housing-advice-line',
  //   telephone: '020 7359 5767',
  //   address: 'N1 3QP'
  // }, {
  //   name: 'The Manna',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/manna',
  //   telephone: '020 7226 5369',
  //   address: 'N1 2DF'
  // }, {
  //   name: 'Peter Bedford Housing Association - Hackney',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/peter-bedford-housing-association-hackney',
  //   telephone: '020 3815 4100',
  //   address: 'E8 4DG'
  // }, {
  //   name: 'LB Islington - Housing Aid Centre',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-islington-housing-aid-centre',
  //   telephone: '020 7527 6371',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'LB Islington - Referrals Co-ordinator Team',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-islington-referrals-co-ordinator-team',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'One Support - Young People\'s Service (Islington)',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/one-support-young-peoples-service-islington',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'LB Islington - Referrals Co-ordinator Team',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-islington-referrals-co-ordinator-team',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'Peter Bedford Housing Association - Islington',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/peter-bedford-housing-association-islington',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'Sapphire Independent Housing - Bethany House',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/sapphire-independent-housing-bethany-house',
  //   telephone: '020 7837 3420',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'SHP - Arundel Project',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shp-arundel-project',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'SHP - Ashley Road',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shp-ashley-road',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'SHP - Highbury New Park',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shp-highbury-new-park',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'St Mungo\'s - Islington Mental Health',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-islington-mental-health',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'St Mungo\'s - Islington Vulnerable Adults',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-islington-vulnerable-adults',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'Stonham - Norman House',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/stonham-norman-house',
  //   telephone: '020 7527 3360',
  //   address: 'N1 1XR'
  // }, {
  //   name: 'The Margins Project (Union Chapel)',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/margins-project-union-chapel',
  //   telephone: '020 7704 9050',
  //   address: 'N1 2UN'
  // }, {
  //   name: 'Gems',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/gems',
  //   telephone: '020 7033 4011',
  //   address: 'N16 8NA'
  // }, {
  //   name: 'Providence Row HA - Bridge Gardens',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/providence-row-ha-bridge-gardens',
  //   telephone: '020 7249 1446',
  //   address: 'N16 9GN'
  // }, {
  //   name: 'Alone in London Service',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/alone-in-london-service',
  //   telephone: '020 7278 4224',
  //   address: 'N1 7SU'
  // }, {
  //   name: 'Hope Worldwide',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/hope-worldwide',
  //   telephone: '020 7713 7655',
  //   address: 'EC1V 2PY'
  // }, {
  //   name: 'Shelter - London Housing Advice Appointment Service',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shelter-london-housing-advice-appointment-service',
  //   telephone: '0344 515 1280',
  //   address: 'EC1V 2PU'
  // }, {
  //   name: 'Shelter London - Public Advice Line',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/shelter-london-public-advice-line',
  //   telephone: '0344 515 1540',
  //   address: 'EC1V 2PU'
  // }, {
  //   name: 'Dogs Trust - Hope Project',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/dogs-trust-hope-project',
  //   telephone: '020 7833 7688',
  //   address: 'EC1V 7RQ'
  // }, {
  //   name: 'Providence Row - Middle Street Project',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/providence-row-middle-street-project',
  //   telephone: '020 7600 5920',
  //   address: 'EC1A 7JA'
  // }, {
  //   name: 'Providence Row HA - Rivaz Place',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/providence-row-ha-rivaz-place',
  //   telephone: '020 7710 0572',
  //   address: 'EC1A 7HF'
  // }, {
  //   name: 'St Mungo\'s - Supported Housing Westminster',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-supported-housing-westminster',
  //   telephone: '020 7710 0596',
  //   address: 'EC1A 7HF'
  // }, {
  //   name: 'City of London - Homelessness Team',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/city-of-london-homelessness-team',
  //   telephone: '020 7332 1804',
  //   address: 'EC2P 2EJ'
  // }, {
  //   name: 'LB Islington - Old Street Area Housing Office',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-islington-old-street-area-housing-office',
  //   telephone: '020 7527 6250',
  //   address: 'EC1V 9HX'
  // }, {
  //   name: 'Catch22 - London Housing Service',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/catch22-london-housing-service',
  //   telephone: '020 7336 4800',
  //   address: 'EC1V 3AG'
  // }, {
  //   name: 'Scotscare and Borderline',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/scotscare-and-borderline',
  //   telephone: '020 7240 3718',
  //   address: 'EC1Y 2AJ'
  // }, {
  //   name: 'St Mungo\'s - Camden Mental Health SIH',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-camden-mental-health-sih',
  //   telephone: '020 7608 4738',
  //   address: 'EC1V 9NR'
  // }, {
  //   name: 'Look Ahead - David Barker House',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/look-ahead-david-barker-house',
  //   telephone: '020 7922 0290',
  //   address: 'SE1 8NZ'
  // }, {
  //   name: 'Waterloo Health Centre',
  //   type: 'Health Service',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/waterloo-health-centre',
  //   telephone: '020 7928 4049',
  //   address: 'SE1 7RJ'
  // }, {
  //   name: 'Princes Trust - Fairbridge Programme (Hackney Centre)',
  //   type: 'Advice',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/princes-trust-fairbridge-programme-hackney-centre',
  //   telephone: '020 322 5900',
  //   address: 'E8 3SE'
  // }, {
  //   name: 'LB Hackney - Housing Advice Centre',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-hackney-housing-advice-centre',
  //   telephone: '020 8356 2929',
  //   address: 'E8 1DY'
  // }, {
  //   name: 'St Mungo\'s - Mare Street Hostel',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-mare-street-hostel',
  //   telephone: '020 8525 7700',
  //   address: 'E8 3SG'
  // }, {
  //   name: 'Greenhouse Walk-In Centre',
  //   type: 'Health Service',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/greenhouse-walk-in-centre',
  //   telephone: '020 8510 4490',
  //   address: 'E9 7SN'
  // }, {
  //   name: 'Dunloe Centre',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/dunloe-centre',
  //   telephone: '020 7739 9976',
  //   address: 'E2 8NS'
  // }, {
  //   name: 'St Mungo\'s - Hackney Substance Misuse',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/st-mungos-hackney-substance-misuse',
  //   telephone: '020 8985 3519',
  //   address: 'E5 8NP'
  // }, {
  //   name: 'LB Tower Hamlets One Stop Shop - Bethnal Green',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/lb-tower-hamlets-one-stop-shop-bethnal-green',
  //   telephone: '020 7364 5020',
  //   address: 'E2 6NE'
  // }, {
  //   name: 'Open Door Drop-in Centre',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/open-door-drop-in-centre',
  //   telephone: '020 8800 8422',
  //   address: 'N16 0BD'
  // }, {
  //   name: 'North London Action for the Homeless',
  //   type: 'Day Centre',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/north-london-action-for-homeless',
  //   telephone: '078 9170 3221',
  //   address: 'N16 7UE'
  // }, {
  //   name: 'Ackee Housing Project',
  //   type: 'Accommodation',
  //   website: 'http://www.homeless.org.uk/homeless-england/service/ackee-housing-project',
  //   telephone: '020 7254 5159',
  //   address: 'N16 8SX'
  // }, {
  //   name: 'Whitechapel Mission',
  //   type: 'Day Centre',
  //   website: 'http://www.whitechapel.org.uk',
  //   telephone: '020 7247 8280',
  //   address: 'E1 1BJ'
  // }, {
  //   name: 'LB Tower Hamlets One Stop Shop - Stepney & Wapping',
  //   type: 'Accommodation',
  //   website: 'http://www.towerhamlets.gov.uk',
  //   telephone: '020 7364 5020',
  //   address: 'E1 2FB'
  // }, {
  //   name: 'Cardboard Citizens',
  //   type: 'Day Centre',
  //   website: 'http://www.cardboardcitizens.org.uk',
  //   telephone: '020 7377 8948',
  //   address: 'E1 1EJ'
  // }, {
  //   name: 'Advisory Service for Squatters',
  //   type: 'Day Centre',
  //   website: 'http://www.squatter.org.uk',
  //   telephone: '020 3216 0099',
  //   address: 'E1 7QX'
  // }, {
  //   name: 'Doctors of the World UK - London Clinic',
  //   type: 'Health Centre',
  //   website: 'http://www.doctorsoftheworld.org.uk',
  //   telephone: '020 70789 629',
  //   address: 'E2 0EF'
  // }, {
  //   name: 'Health E1 - Homeless Medical Centre',
  //   type: 'Health Centre',
  //   website: 'http://www.healthe1practice.nhs.uk',
  //   telephone: '020 7247 0090',
  //   address: 'E1 6PU'
  // }, {
  //   name: 'Dellow Centre',
  //   type: 'Health Centre',
  //   website: 'http://www.providencerow.org.uk',
  //   telephone: '020 7375 0020',
  //   address: 'E1 7SA'
  // }, {
  //   name: 'Providence Row',
  //   type: 'Day Centre',
  //   website: 'http://www.providencerow.org.uk',
  //   telephone: '020 7375 0020',
  //   address: 'E1 7SA'
  // }, {
  //   name: 'LB Tower Hamlets One Stop Shop - Bethnal Green',
  //   type: 'Accommodation',
  //   website: 'http://www.towerhamlets.gov.uk',
  //   telephone: '020 7364 5020',
  //   address: 'E2 6NE'
  // }, {
  //   name: 'Crisis Skylight - London',
  //   type: 'Day Centre',
  //   website: 'http://www.crisis.org.uk',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Drapers City Foyer',
  //   type: 'Accommodation',
  //   website: 'http://www.prha.net',
  //   telephone: '0300 636 1967',
  //   address: 'E1 6LT'
  // }, {
  //   name: 'LB Tower Hamlets - Housing Options Service',
  //   type: 'Day Centre',
  //   website: 'http://www.towerhamlets.gov.uk',
  //   telephone: '020 7364 7474',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Look Ahead - Hackney Road Hostel & Flats',
  //   type: 'Accommodation',
  //   website: 'http://www.lookahead.org.uk',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Providence Row HA - Dallow Centre',
  //   type: 'Health Centre',
  //   website: '',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Riverside House',
  //   type: 'Accommodation',
  //   website: 'http://www.prha.net/',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Salvation Army - Booth House Lifehouse (Tower Hamlets)',
  //   type: 'Accommodation',
  //   website: 'http://www.salvationarmy.org.uk',
  //   telephone: '020 7364 7474',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Tower Hamlets North Young People's Support Service',
  //   type: 'Accommodation',
  //   website: '',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Sonning & Culham Project',
  //   type: 'Accommodation',
  //   website: '',
  //   telephone: '020 7613 4993',
  //   address: 'E2 7LB'
  // }, {
  //   name: 'Lea Bridge House',
  //   type: 'Accommodation',
  //   website: 'http://www.paradigmhousing.co.uk',
  //   telephone: '0300 303 8644',
  //   address: 'E10 7EB'
  // }, {
  //   name: 'Chapter 1 - Stephen House',
  //   type: 'Accommodation',
  //   website: 'http://www.chapter1.org.uk',
  //   telephone: '020 8509 1090',
  //   address: 'E17 9DB'
  // }, {
  //   name: 'Ashiana Network',
  //   type: 'Accommodation',
  //   website: 'http://www.ashiana.org.uk',
  //   telephone: '020 8539 0427',
  //   address: 'E11 1QY'
  // }, {
  //   name: 'Nacro - Waltham Forest High Risk Offender Project',
  //   type: 'Accommodation',
  //   website: 'http://www.nacro.org.uk',
  //   telephone: '020 8558 1871, 020 8558 9560',
  //   address: 'E11 3BG'
  // }, {
  //   name: 'Nacro - Waltham Forest YP Project',
  //   type: 'Accommodation',
  //   website: 'http://www.nacro.org.uk',
  //   telephone: '020 8539 6855',
  //   address: 'E11 1AR'
  // }, {
  //   name: 'Nacro - Waltham Forest YP Project',
  //   type: 'Accommodation',
  //   website: 'http://www.nacro.org.uk',
  //   telephone: '020 8539 6855',
  //   address: 'E11 1AR'
  // }, {
  //   name: 'Forest YMCA',
  //   type: 'Accommodation',
  //   website: 'http://www.forestymca.org.uk',
  //   telephone: '020 8509 4600',
  //   address: 'E17 3EF'
  // }, {
  //   name: 'Forest YMCA - Waltham Forest Refugee Project',
  //   type: 'Accommodation',
  //   website: 'http://www.forestymca.org.uk',
  //   telephone: '020 8509 4626',
  //   address: 'E17 3EF'
  // }, {
  //   name: 'St Mungo's - Hackney Substance Misuse',
  //   type: 'Accommodation',
  //   website: 'http://www.mungos.org',
  //   telephone: '020 8985 3519',
  //   address: 'E5 8NP'
  // }, {
  //   name: 'Branches',
  //   type: 'Accommodation',
  //   website: 'http://www.wfcbranches.org.uk',
  //   telephone: '020 8520 6363',
  //   address: 'E17 3HR'
  // }, {
  //   name: 'Children's Society - New Londoners',
  //   type: 'Advice',
  //   website: 'http://www.childrenssociety.org.uk/what-we-do/helping-children/destitution-proje...',
  //   telephone: '0208 221 8200',
  //   address: 'E15 4BQ'
  // }, {
  //   name: 'Providence Row HA - Elsdale Street',
  //   type: 'Accommodation',
  //   website: 'http://www.childrenssociety.org.uk/what-we-do/helping-children/destitution-proje...',
  //   telephone: '020 8525 0127',
  //   address: 'E9 6QY'
  // }, {
  //   name: 'Newham Transitional Practice (Vicarage Lane)',
  //   type: 'Health Centre',
  //   website: 'http://www.childrenssociety.org.uk/what-we-do/helping-children/destitution-proje...',
  //   telephone: '0208 236 2255',
  //   address: 'E15 4ES'
  // }, {
  //   name: 'LB Hackney - Housing Advice Centre',
  //   type: 'Accommodation',
  //   website: 'http://www.hackney.gov.uk',
  //   telephone: '020 8356 2929',
  //   address: 'E8 1DY'
  // }, {
  //   name: 'LB Waltham Forest - Housing Assessment and Options Unit',
  //   type: 'Accommodation',
  //   website: 'http://www.walthamforest.gov.uk',
  //   telephone: '020 8496 3000',
  //   address: 'E17 4GG'
  // }, {
  //   name: 'LB Tower Hamlets One Stop Shop - Bow & North Poplar',
  //   type: 'Accommodation',
  //   website: 'http://www.towerhamlets.gov.uk',
  //   telephone: '020 7364 5020',
  //   address: 'E3 5EQ'
  // }, {
  //   name: 'LB Tower Hamlets One Stop Shop - Bow & North Poplar',
  //   type: 'Accommodation',
  //   website: 'http://www.towerhamlets.gov.uk',
  //   telephone: '020 7364 5020',
  //   address: 'E3 5EQ'
  // }, {
  //   name: 'Greenhouse Walk-In Centre',
  //   type: 'Accommodation',
  //   website: 'http://www.thamesreach.org.uk',
  //   telephone: '020 8510 4490',
  //   address: 'E9 7SN'
  // }, {
  //   name: 'Princes Trust - Fairbridge Programme (Hackney Centre)',
  //   type: 'Accommodation',
  //   website: 'http://www.fairbridge.org.uk',
  //   telephone: '020 3222 5900',
  //   address: 'E8 3SE'
  // }, {
  //   name: 'Princes Trust - Fairbridge Programme (Hackney Centre)',
  //   type: 'Advice',
  //   website: 'http://www.fairbridge.org.uk',
  //   telephone: '020 3222 5900',
  //   address: 'E8 3SE'
  // }, {
  //   name: 'St Mungo's - Mare Street Hostel',
  //   type: 'Accommodation',
  //   website: 'http://www.mungos.org',
  //   telephone: '020 8525 7700',
  //   address: 'E8 3SG'
  // }, {
  //   name: 'Drapers City Foyer',
  //   type: 'Accommodation',
  //   website: 'http://www.prha.net',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'LB Tower Hamlets - Housing Options Service',
  //   type: 'Accommodation',
  //   website: 'http://www.towerhamlets.gov.uk',
  //   telephone: '020 7364 7474',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Look Ahead - Hackney Road Hostel & Flats',
  //   type: 'Accommodation',
  //   website: 'http://www.lookahead.org.uk',
  //   telephone: '020 7364 7151',
  //   address: 'E2 0PG'
  // }, {
  //   name: 'Peter Bedford Housing Association - Hackney',
  //   type: 'Accommodation',
  //   website: 'http://www.peterbedford.org.uk',
  //   telephone: '020 3815 4100',
  //   address: 'E8 4DG'
  // }, {
  //   name: 'Dunloe Centre',
  //   type: 'Day Centre',
  //   website: 'ssmpriory@aol.com',
  //   telephone: '020 7739 9976',
  //   address: 'E2 8NS'
  // }, {
  //   name: 'Caritas Anchor House',
  //   type: 'Accommodation',
  //   website: 'http://www.caritasanchorhouse.org.uk',
  //   telephone: '020 7476 6062',
  //   address: 'E16 4HB'
  // }, {
  //   name: 'Spitalfields Crypt Trust - Acorn House',
  //   type: 'Accommodation',
  //   website: 'http://www.sct.org.uk',
  //   telephone: '020 7613 3055',
  //   address: 'E1 6JN'
  // }, {
  //   name: 'Spitalfields Crypt Trust - Shoreditch Community Project',
  //   type: 'Day Centre',
  //   website: 'http://www.sct.org.uk',
  //   telephone: '020 7613 3232',
  //   address: 'E1 6JN'
  // }, {
  //   name: 'Queen Victoria Seamen's Rest',
  //   type: 'Accommodation',
  //   website: 'http://www.qvsr.org.uk',
  //   telephone: '020 7987 5466',
  //   address: 'E14 6DF'
  // }, {
  //   name: 'Just Homes',
  //   type: 'Accommodation',
  //   website: 'http://www.justhomes.org.uk',
  //   telephone: '020 7987 5466',
  //   address: 'E16 1QU'
  // }, {
  //   name: 'Just Homes - 1 Cumberland Road',
  //   type: 'Accommodation',
  //   website: 'http://www.justhomes.org.uk',
  //   telephone: '020 7473 5286',
  //   address: 'E16 1QU'
  // }, {
  //   name: 'LB Newham - Homeless Persons Unit',
  //   type: 'Accommodation',
  //   website: 'http://www.newham.gov.uk',
  //   telephone: '020 8430 2000',
  //   address: 'E6 2RT'
  // }, {
  //   name: 'Dogs Trust - Hope Project',
  //   type: 'Advice',
  //   website: 'http://www.dogstrusthopeproject.org.uk',
  //   telephone: '020 8430 2000',
  //   address: 'EC1V 7RQ'
  // }, {
  //   name: 'Catch22 - London Housing Service',
  //   type: 'Accommodation',
  //   website: 'http://www.catch-22.org.uk',
  //   telephone: '020 7336 4800',
  //   address: 'EC1V 3AG'
  // }, {
  //   name: 'City of London - Homelessness Team',
  //   type: 'Accommodation',
  //   website: 'http://www.cityoflondon.gov.uk',
  //   telephone: '020 7332 1804/3791',
  //   address: 'EC1V 3AG'
  // }, {
  //   name: 'LB Greenwich - Housing Aid Centre',
  //   type: 'Accommodation',
  //   website: 'http://www.greenwich.gov.uk',
  //   telephone: '020 8921 2863',
  //   address: 'SE18 6HQ'
  // }, {
  //   name: 'LB Greenwich - Housing Options and Support',
  //   type: 'Accommodation',
  //   website: 'http://www.greenwich.gov.uk',
  //   telephone: '020 8921 2863',
  //   address: 'SE18 6HQ'
  // }, {
  //   name: 'Greenwich Housing Rights',
  //   type: 'Accommodation',
  //   website: 'http://www.grhr.co.uk',
  //   telephone: '020 8854 8848',
  //   address: 'SE18 6PF'
  // }, {
  //   name: 'Twentyfifth Avenue Housing',
  //   type: 'Accommodation',
  //   website: 'http://www.twentyfifthavenue.co.uk',
  //   telephone: '020 8854 8854',
  //   address: 'SE18 6PF'
  // }, {
  //   name: 'Depaul UK - Creekside Foyer',
  //   type: 'Accommodation',
  //   website: 'http://www.depauluk.org',
  //   telephone: '020 8921 2863',
  //   address: 'SE18 6NL'
  // }, {
  //   name: 'Emmaus Greenwich',
  //   type: 'Accommodation',
  //   website: 'http://www.emmaus.org.uk',
  //   telephone: '0208 316 5398',
  //   address: 'SE18 7NN'

  }])
  .then((resources) => {
    console.log(`${resources.length} resources created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
