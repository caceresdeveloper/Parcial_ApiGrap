const express = require('express');
const router = express.Router();

const {
    obtainAllUsers,
    saveUser,
    findUserById,
    deleteUser,
    loginUser,
    loginAdminSeller,
    updatePassword, // Elimina una de las dos entradas con el nombre 'updatePassword'
    sendMailRecoveryPass,
    updateUser
} = require ('./../controllers/controll_user');

router.get('/', obtainAllUsers);
router.post('/', saveUser);
router.get('/:id', findUserById);
router.delete('/:id', deleteUser);

router.post('/login', loginUser);
router.post('/login2', loginAdminSeller);
router.post('/updatePassword', updatePassword);
router.post('/sendEmail/:email', sendMailRecoveryPass);
router.put('/:id', updateUser);

module.exports = router;