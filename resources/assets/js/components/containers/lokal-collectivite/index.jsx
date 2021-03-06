import React from "react";
import ReactDOM from 'react-dom';
import Icon from '../../containers/app/icons/Icon'
import FourColumns from '../../components/FourColumns'
import FourColumnsWave from '../../components/FourColumnsWave'
import ThreeColumns from '../../components/ThreeColumns'
import HeaderLokal from '../../components/HeaderLokal'

class LokalCollectivite extends React.Component {
  constructor(props) {
    super(props);
  
    this.header = {
      backgroundImage: 'images/lokal/4.jpg',
      menu: [
        {
          title: 'Lokal citoyen(ne)',
          url: '/lokal-citoyen',
          icon: 'citoyen',
          current: false,
        },
        {
          title: 'Lokal association',
          url: '/lokal-association',
          icon: 'association',
          backgroundImage: '',
          current: false,
        },
        {
          title: 'Lokal professionnel(le)',
          url: '/lokal-pro',
          icon: 'pro',
          backgroundImage: '',
          current: false,
        },
        {
          title: 'Lokal collectivité',
          url: '/lokal-collectivite',
          icon: 'collectivite',
          backgroundImage: '',
          current: true,
        },
        {
          title: 'Plateforme de <br/>crowdfunding',
          url: '/plateforme-de-crowdfunding',
          icon: 'crowdfunding',
          backgroundImage: '',
          current: false,
        }
      ]
    }
  
    this.firstSection = {
      title: 'Pourquoi c\'est cool',
      col: [
        {
          title: 'Je démultiplie l’impact de mes communications sur la vie locale',
          text: 'En diffusant plus largement les contenus produits',
          icon: 'impact-communication'
        },
        {
          title: 'Je renforce le lien entre élus locaux et administrés',
          text: 'En affichant le soutien officiel de la collectivité aux projets locaux',
          icon: 'link'
        },
        {
          title: 'Je comprends mieux les attentes des citoyens',
          text: 'En les laissant choisir les projets qu’ils jugent les plus pertinents',
          icon: 'idea'
        },
        {
          title: 'J’encourage le financement participatif des projets locaux',
          text: 'En mobilisant de mulitiples donateurs',
          icon: 'network'
        }
      ],
    }
  
    this.secondSection = {
      title: 'Mes super-pouvoirs',
      col: [
        {
          title: 'Diffuser',
          text: 'J’utilise les bornes pour relayer la communication institutionnelle et informer les citoyens des actualités locales.',
          icon: 'informer'
        },
        {
          title: 'Soutenir',
          text: 'J’affiche mon soutien aux initiatives portées par les associations et administrés. Je donne de la crédibilité aux porteurs de projets.',
          icon: 'choisir'
        },
        {
          title: 'Consulter',
          text: 'Sur la borne, je soumets mes projets à l’avis des habitants. Ils ont ensuite quinze jours pour voter pour ceux qu’ils souhaitent voir mis en place.',
          icon: 'agir'
        },
        {
          title: 'Financer',
          text: 'En panne de budget ? Je crée une dynamique locale pour financer les projets positifs de ma collectivité de manière participative.',
          icon: 'suivre'
        }
      ],
      text: 'Voici les super-pouvoirs que vous aurez en tant que plateforme de crowdfunding une fois que notre solution sera développée.',
      buttons: [
        {
          text: 'Je découvre les projets',
          url: '/',
          target: '_self',
          isDisabled: true,
          tooltip: 'Le site est en cours de contruction. Nous travaillons dur pour vous permettre de retrouver les premiers projets en ligne.',
          color: 'orange',
        },
        {
          text: 'Je découvre les bornes',
          url: '/',
          target: '_self',
          isDisabled: false,
          tooltip: false,
          color: 'orange',
        }
      ]
    }
  
    this.thirdSection = {
      col1: {
        title: 'La condition : héberger son projet',
        introduction: 'Je suis fortement susceptible de connaître les porteurs du projet puisque cela se passe à côté de chez moi !',
        text: 'Par exemple, je donne pour le potager collectif dans le parc derrière la mairie, la recherche sur la maladie dont le petit Théo de l\'école primaire est atteint, l’équipe de basket du village etc.',
      },
      col2: {
        buttons: []
      }
    }
  }
  
  render() {
    const sectionStyle = {
      backgroundImage: 'url(images/lokal/4.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    
    return (
      <div>
  
        <HeaderLokal content={this.header}/>

        <FourColumns content={this.firstSection}/>

        <FourColumnsWave content={this.secondSection}/>

        <ThreeColumns content={this.thirdSection}/>
        
      </div>
    )
  }
}

export default LokalCollectivite


if (document.getElementById('lokal-collectivite')) {
  ReactDOM.render(<LokalCollectivite />, document.getElementById('lokal-collectivite'));
}