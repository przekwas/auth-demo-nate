import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    res.json('REGISTER TEST');
});

export default router;