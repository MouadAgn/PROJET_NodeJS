const Modele = require('../models/ModeleRoute');  // Assurez-vous du chemin correct
const sequelize = require('../database/database')
const bcrypt = require('bcrypt');



// const UtilisateurController = { createUtilisateur: async (req, res) => {
  
//   try {
//     const { pseudo, password } = req.body;
//     //Utilisateur_role.sync({force:true})
//     // Vérifier si le pseudo existe déjà
//     const existingUser = await Utilisateur.findOne({ where: { pseudo } });
  
//     if (existingUser) {
//       return res.status(400).json({ error: 'Ce pseudo existe déjà.' });
//     }
  
//     // Hasher le mot de passe
//     const hashedPassword = await bcrypt.hash(password, 10);
  
//     // Récupérer le rôle par défaut 'peon'
//     const defaultRole = await Role.findOne({ where: { nom: 'peon' } });
  
//     // Créer l'utilisateur avec le mot de passe hashé et le rôle par défaut
//     const nouvelUtilisateur = await Utilisateur.create({
//       pseudo,
//       password: hashedPassword,
//       is_super_admin: false,
//     });
//     console.log(defaultRole)
//     // Associer l'utilisateur au rôle par défaut en utilisant la table intermédiaire utilisateur_role
//     if (nouvelUtilisateur) {
//       await nouvelUtilisateur.addRole(defaultRole, { through: 'Utilisateur_role' });
//       console.log("Utilisateur associé au rôle par défaut avec succès");
//       res.status(201).json({ message: 'Utilisateur créé avec succès', user: nouvelUtilisateur.toJSON() });
//     } else {
//       console.error("La création de l'utilisateur a échoué :", nouvelUtilisateur);
//       res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
//     }
//   } catch (error) {
//     console.error("Erreur lors de la création de l'utilisateur :", error);
//     res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
//   }
   
//   },
// };





  // // Obtention de la liste des dieux aimés par un utilisateur
  // getUtilisateurDieux: async (req, res) => {
  //   try {
  //     const utilisateurId = parseInt(req.params.id);
      
  //     // Utilisation de Sequelize pour rechercher l'utilisateur dans la base de données
  //     const utilisateur = await Utilisateur.findByPk(utilisateurId);

  //     if (utilisateur) {
  //       res.json(utilisateur);
  //     } else {
  //       res.status(404).json({ message: 'Utilisateur non trouvé' });
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération des dieux de l'utilisateur :", error);
  //     res.status(500).json({ message: "Erreur lors de la récupération des dieux de l'utilisateur" });
  //   }
  // };


module.exports = UtilisateurController;
