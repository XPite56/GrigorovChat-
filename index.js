export default async ({ req, res, log }) => {
    if (req.body && req.body.text) {
        log(`Уведомление для: ${req.body.receiver}`);
        // Тут серверная магия отправки уведомления
    }
    return res.json({ ok: true });
};
