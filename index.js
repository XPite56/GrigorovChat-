module.exports = async ({ req, res, log, error }) => {
  // Проверяем, что это создание нового сообщения
  if (req.body && req.body.text) {
    log("Новое сообщение: " + req.body.text);
    // Здесь будет логика отправки через FCM (Google)
    // Пока просто подтверждаем получение события
  }
  return res.json({ success: true });
};

