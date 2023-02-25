-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 03 Février 2023 à 04:57
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `eko`
--
CREATE DATABASE IF NOT EXISTS `eko` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `eko`;

-- --------------------------------------------------------

--
-- Structure de la table `action`
--

CREATE TABLE `action` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `action`
--

INSERT INTO `action` (`id`, `name`, `link_name`, `img`) VALUES
(1, 'Achat', 'achat', NULL),
(2, 'Vente', 'vente', NULL),
(3, 'Recherche', 'recherche', NULL),
(4, 'Modification du profil', 'modification-du-profil', NULL),
(5, 'Modification de l\'entreprise', 'modification-de-l\'entreprise', NULL),
(6, 'Nouveau vendeur', 'nouveau-vendeur', NULL),
(7, 'Remove vendeur', 'remove-vendeur', NULL),
(8, 'Ban', 'ban', NULL),
(9, 'Abonnement Eko-save', 'abonnement-eko-save', NULL),
(10, 'Amélioration du badge', 'amelioration-du-badge', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `analytics`
--

CREATE TABLE `analytics` (
  `id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `product_id` int(11) NOT NULL,
  `action_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `business`
--

CREATE TABLE `business` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(1000) NOT NULL DEFAULT 'icons-user.jpg',
  `activity` text NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `business_email` varchar(100) NOT NULL,
  `business_phone` varchar(100) NOT NULL,
  `business_password` varchar(100) NOT NULL,
  `business_adress` varchar(100) NOT NULL,
  `business_name` varchar(100) NOT NULL,
  `business_banking_informations` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `business`
--

INSERT INTO `business` (`id`, `name`, `img`, `activity`, `creation_date`, `business_email`, `business_phone`, `business_password`, `business_adress`, `business_name`, `business_banking_informations`, `user_id`) VALUES
(1, 'Eko', 'icons-user.jpg', 'E-commerce', '2023-02-01 09:44:12', 'contacteko.pro@gmail.com', '0676967586', 'GwendalChefProjetEko1#', '11 Rue de Marseille Lyon', 'Eko', '', 1);

-- --------------------------------------------------------

--
-- Structure de la table `condition`
--

CREATE TABLE `condition` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `desc` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `condition`
--

INSERT INTO `condition` (`id`, `name`, `link_name`, `desc`) VALUES
(1, 'utilisation', 'utilisation', 'En acceptant les conditions générales d\'utilisation, l\'utilisateur accepte que : eko récupère et conserve les ses coordonnées bancaire et leurs utilisations. Il accepte aussi que eko utilise ses données comme bon lui semble. L\'utilisateur accepte que eko puisse voler ses biens matériels grâce à leur adresse.'),
(2, 'vente', 'vente', 'En acceptant les conditions générales de ventes, l\'utilisateur accepte de ne pas être remboursé dans le cas où sont achat n\'est jamais arrivé à destination. Il accepte de donner l\'entièreté de ses gains fait sur eko en faisant un don à l\'entreprise eko.'),
(3, 'rétractation', 'retractation', 'En acceptant les générales de rétractations l\'utilisateur accepte de ne pas pouvoir se rétracter lors des achats.'),
(4, 'Mention légale', 'mention-legale', 'En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site https:/eko.com/ l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi. L\'utilisateur accepte de fournir tout ses biens moraux, matériels et virtuels à Eko.');

-- --------------------------------------------------------

--
-- Structure de la table `envy_list`
--

CREATE TABLE `envy_list` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `desc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `faq`
--

INSERT INTO `faq` (`id`, `name`, `desc`) VALUES
(1, 'Qu\'est ce que Eko ?', 'Eko est un site de vente de biens eko-responable.'),
(2, 'Depuis quand Eko existe-t\'il ?', 'Eko existe depuis le 6 août 2021'),
(3, 'Quel est l\'objectif de Eko ?', 'Nous cherchons à révolutionner l’e-commerce en prenant\ncompte des problématiques sociétales actuelles à savoir la\npollution de la planète et la défavorisation du commerce local.');

-- --------------------------------------------------------

--
-- Structure de la table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) NOT NULL,
  `label_name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `labels`
--

INSERT INTO `labels` (`id`, `label_name`, `link_name`, `img`) VALUES
(1, 'Le meilleur des produits', 'le-meilleur-des-produits', 'https://cdn.discordapp.com/attachments/1030456470678016000/1070341422030520340/bestseller.png'),
(2, 'Les nouveautés', 'les-nouveautes', 'https://media.istockphoto.com/id/1254219019/vector/new-comic-speech-bubble-vector-flat-illustrations-color-phrase-lettering-with-explosive.jpg?s=170667a&w=0&k=20&c=6sstWGF25-aLurTH4FTu2FOCPVaLTGos3bG3tC4cLoM='),
(3, 'Les offres', 'les-offres', 'https://img.freepik.com/vecteurs-premium/icone-offre-limitee-compte-rebours-temps-offre-limitee-ruban-banniere-vectorielle-moderne-chronometre_349999-979.jpg'),
(4, 'Mode et beauté', 'mode-et-beaute', 'https://www.malemodelscene.net/wp-content/uploads/2022/08/Mikkel-Jensen-Rag-Bone-Icons-00-364x205.jpg'),
(5, 'Informatique', 'informatique', 'https://i.notretemps.com/1400x787/smart/2022/04/14/homme-ordinateur.jpg'),
(6, 'Maison et bricolage', 'maison-et-bricolage', 'https://www.viepratique.fr/wp-content/uploads/sites/4/2019/04/bricolage-et-diy-quels-outils-avoir-chez-soi-750x410.jpg'),
(7, 'Electroménager', 'electromenager', 'https://www.maisonapart.com/images/normal/20100429_120006_montage.jpg'),
(8, 'Livres et multimédia', 'livres-et-multimedia', 'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978__340.jpg'),
(9, 'Enfants', 'enfants', 'https://www.educatout.com/images/medium/Trucs-et-conseils-pour-valoriser-l-enfant.jpg'),
(10, 'Sport', 'sport', 'https://www.latranchesurmer.fr/medias/2022/08/db77d79aad_50173706_depenses-caloriques-sport-julien-eichinger-adobe-stock.jpg'),
(11, 'Auto-moto', 'auto-moto', 'https://photos.tf1.fr/396/222/audi-r8-spyder-essai-automoto-2016-1-aa76db-0@1x.jpg'),
(12, 'Fournitures de bureau', 'fournitures-de-bureau', 'https://www.professionnels.ma/sites/default/files/2020-03/pub-4.png.jpeg'),
(13, 'Jardin et animalerie', 'jardin-et-animalerie', 'https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/fotolia_47825735_s_chien.jpg?itok=h0i1ASE2'),
(14, 'Abonnement Eko-save', 'abonnement-eko-save', 'https://cdn.discordapp.com/attachments/1065997658306662411/1070837545484685362/eko_save.png'),
(15, 'Produits recommandés pour vous', 'produits-recommandes-pour-vous', 'https://img.freepik.com/premium-photo/woman-hand-writing-recommendation-blank-transparent-board-with-marker-isolated-white-background-business-concept-stock-photo_179068-3061.jpg?w=2000');

-- --------------------------------------------------------

--
-- Structure de la table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `img` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `news`
--

INSERT INTO `news` (`id`, `name`, `link_name`, `desc`, `img`) VALUES
(1, 'Nouveau nombre d\'utilisateur', 'nouveau-nombre-d\'utilisateur ', 'Merci à vous, grâce à vous nous venons de comptabilisé nombre premier visiteur sur notre site.', 'https://cdn.generationvoyage.fr/2014/12/belles-photos-ciel-nuit-etoiles-8.jpg'),
(2, 'Arnaque', 'arnaque', 'Nous n\'arnaquons pas nos utilisateurs, bienvenue sur Eko', 'https://media.gqmagazine.fr/photos/5efb5110caa5a09c5304b100/master/w_1600%2Cc_limit/Bombardier-Global-5500.jpg'),
(3, 'On a choisi l\'e-commerce', 'on-a-choisi-l\'e-commerce', 'Pourquoi, feur', 'https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `parainnage`
--

CREATE TABLE `parainnage` (
  `id` int(11) NOT NULL,
  `parain_id` int(11) NOT NULL,
  `parainated_id` int(11) NOT NULL,
  `link_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `parainnage`
--

INSERT INTO `parainnage` (`id`, `parain_id`, `parainated_id`, `link_name`) VALUES
(1, 1, 2, 'ewen-Gwendal');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `link_name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `seller_name` varchar(100) NOT NULL,
  `eko_score` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `label_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `product`
--

INSERT INTO `product` (`id`, `name`, `img`, `link_name`, `quantity`, `price`, `seller_name`, `eko_score`, `description`, `label_name`) VALUES
(3, 'Petite cuillère', 'https://th.bing.com/th/id/OIP.C_Tr3nS7Qbw06XfW26xfEQHaFO?w=279&h=197&c=7&r=0&o=5&pid=1.7', 'petite-cuillère', 14, 5, 'Eko', 1, NULL, 'les-meilleurs-produits'),
(8, 'Pied de biche', 'https://th.bing.com/th/id/OIP.g4spheUMT2y8V23UMGMIHwHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7', 'pied-de-biche', 2, 100, 'Eko', -100, NULL, 'les-nouveautes'),
(9, 'Pc Gaming', 'https://media.materiel.net/r550/products/MN0005865298_1_0005888236_0005932147.jpg', 'pc-gaming', 1, 199, 'Eko', 999, NULL, 'les-offres'),
(10, 'Tshirt Ecologie ', 'https://image.spreadshirtmedia.net/image-server/v1/products/T812A2PA5886PT17X34Y57D178226855W27788H27788/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2/ecolo-a-velo-cadeau-humour-ecologie.jpg', 'tshirt-ecologie', 20, 20, 'Eko', 10, NULL, 'mode-et-beauté'),
(11, 'Souris', 'https://m.media-amazon.com/images/I/61Y6W7BNhkL._AC_SX679_.jpg', 'souris', 100, 15, 'Eko', 3, NULL, 'informatique'),
(12, 'Pot de peinture noir', 'https://th.bing.com/th?id=OPE.v10qqdKTqTSfNA300C300&w=592&h=550&pid=21.1', 'pot-de-peinture-noir', 3, 75, 'Eko', 0, NULL, 'maison-et-bricolage'),
(13, 'Grille pain', 'https://th.bing.com/th?id=OPE.0rFk3GKf%2fQwCMg300C300&w=200&h=150&c=17&pid=21.1', 'grille-pain', 666, 15, 'Eko', 9, NULL, 'electromenager'),
(14, 'Tchoupi à l\'école', 'https://th.bing.com/th/id/OIP.8eu-raBh9OzemC9Q0dOXIwHaHt?pid=ImgDet&rs=1', 'tchoupi-à-l\'ecole', 3, 9, 'Eko', 15, NULL, 'livres-et-multimedia'),
(15, 'Peluche de martine', 'https://i.pinimg.com/474x/bb/58/b8/bb58b8d4cf1b6c859e83ad8e0c4b3125.jpg', 'peluche-de-martine', 50, 199, 'Eko', 2, NULL, 'enfant'),
(16, 'Ballon de foot', 'https://www.casalsport.com/fstrz/r/s/www.casalsport.com/img/W/CAS/ST/FB/31/09/FB3109/FB3109_ST.jpg?frz-v=74', 'ballon-de-foot', 9, 100, 'Eko', 12, NULL, 'sport'),
(17, 'BMV', 'https://th.bing.com/th/id/R.a82823e630302aecaf68b676ddde7e77?rik=TLr1q6h0FyO9uA&pid=ImgRaw&r=0', 'bmv', 1, 3, 'Eko', 8, NULL, 'auto-moto'),
(18, 'Taille mine', 'https://m.media-amazon.com/images/I/51x3L4cIwML._AC_SX679_.jpg', 'taille-mine', 14, 35, 'Eko', -10, NULL, 'fournitures-de-bureau'),
(19, 'Graine de paquerette', 'https://th.bing.com/th/id/OIP.eQxTYqUc1b5S_hCB52iTEwHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7', 'graine-de-paquerette', 100, 2, 'Eko', 101, NULL, 'jardin-et-animalerie'),
(20, 'Arbre', 'https://actys-coaching.fr/wp-content/uploads/2016/12/Fotolia_139830511_M.jpg', 'arbre', 25000, 1, 'Eko', 9999, NULL, 'abonnement-eko-save'),
(21, 'V-tech', 'https://th.bing.com/th/id/OIP.OsoVLQX09HnTrpN44VWZGAHaHa?pid=ImgDet&rs=1', 'v-tech', 489, 10, 'Eko', -2, NULL, 'produits-recommandes-pour-vous');

-- --------------------------------------------------------

--
-- Structure de la table `product_label`
--

CREATE TABLE `product_label` (
  `product_id` int(11) NOT NULL,
  `labels_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `img` varchar(1000) NOT NULL DEFAULT 'icons-user.jpg',
  `nickname` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `adress` varchar(100) DEFAULT NULL,
  `apartment` varchar(100) DEFAULT NULL,
  `code_postal` varchar(10) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `banking_informations` varchar(200) DEFAULT NULL,
  `acceptance_of_the_gtcu` tinyint(1) NOT NULL DEFAULT '0',
  `stay_connect` tinyint(1) NOT NULL DEFAULT '0',
  `newsletter` tinyint(1) NOT NULL DEFAULT '0',
  `eko_experience` float DEFAULT NULL,
  `badges` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `seller` tinyint(1) NOT NULL DEFAULT '0',
  `eko_save` tinyint(1) NOT NULL DEFAULT '0',
  `envy_id` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `name`, `img`, `nickname`, `mail`, `phone_number`, `adress`, `apartment`, `code_postal`, `city`, `password`, `banking_informations`, `acceptance_of_the_gtcu`, `stay_connect`, `newsletter`, `eko_experience`, `badges`, `admin`, `seller`, `eko_save`, `envy_id`) VALUES
(1, 'ewen', 'icons-user.jpg', 'Keltulsan', 'ebeaufils@gaming.tech', '0676967586', '11 rue d\'Hanoï', '102', '69100', 'Lyon', '1ef791d8c8919c64d63bb4574baf1542', NULL, 1, 1, 1, NULL, NULL, 1, 1, 1, NULL),
(2, 'Gwendal', 'icons-user.jpg', 'Gwenitora', 'perso@gwenitora.com', '+33767934493', '', NULL, '69100', 'Lyon', 'b6f959661e049b0b5a510d6284984421', NULL, 0, 0, 0, NULL, NULL, 0, 0, 0, 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `analytics`
--
ALTER TABLE `analytics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_id` (`product_id`,`action_id`,`user_id`);

--
-- Index pour la table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Index pour la table `condition`
--
ALTER TABLE `condition`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `envy_list`
--
ALTER TABLE `envy_list`
  ADD PRIMARY KEY (`user_id`,`product_id`),
  ADD UNIQUE KEY `user_id` (`user_id`,`product_id`);

--
-- Index pour la table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `labels`
--
ALTER TABLE `labels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `parainnage`
--
ALTER TABLE `parainnage`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `parain_id` (`parain_id`),
  ADD UNIQUE KEY `parainated_id` (`parainated_id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `labbel_name` (`label_name`),
  ADD KEY `label_name` (`label_name`),
  ADD KEY `label_name_2` (`label_name`);

--
-- Index pour la table `product_label`
--
ALTER TABLE `product_label`
  ADD PRIMARY KEY (`product_id`,`labels_id`),
  ADD UNIQUE KEY `product_id` (`product_id`,`labels_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `envy_id` (`envy_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `action`
--
ALTER TABLE `action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `analytics`
--
ALTER TABLE `analytics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `condition`
--
ALTER TABLE `condition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `labels`
--
ALTER TABLE `labels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `parainnage`
--
ALTER TABLE `parainnage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
