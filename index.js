export default async ({ req, res, log, error }) => {
  // Проверяем, что событие — это создание нового сообщения
  if (req.body && req.body.text) {
    log(`Новое сообщение от ${req.body.sender}: ${req.body.text}`);
    
    // В будущем здесь мы пропишем отправку Push через сервис Google
    // А пока функция будет просто фиксировать каждое сообщение в логах Appwrite
  }

  return res.json({
    status: "success",
    message: "Функция GrigorovChat успешно обработала событие!"
  });
};
