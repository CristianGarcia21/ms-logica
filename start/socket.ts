import Ws from "App/Services/Ws";

Ws.boot();

/**
 * Listen for incoming socket connections
 */
Ws.io.on("connection", (socket) => {
  console.log("Nuevo dispositivo conectado:", socket.id);

  // Manejar la unión a un chat
  socket.on("joinChat", (chatId) => {
    console.log(`Socket ${socket.id} se unió al chat:${chatId}`);
    socket.join(`chat:${chatId}`);
  });

  // Manejar el envío de mensajes
  socket.on("sendMessage", async (data) => {
    try {
      console.log("Mensaje recibido:", data);

      const { chatId, userId, content } = data;

      // Validar que los datos sean correctos
      if (!chatId || !userId || !content) {
        console.error("Datos incompletos en el mensaje recibido:", data);
        return;
      }

      // Guardar el mensaje en la base de datos
      const Message = (await import("App/Models/Message")).default;
      const message = await Message.create({
        chatId: chatId,
        userId: userId,
        content,
      });

      // Emitir el mensaje a todos los usuarios en la sala correspondiente
      Ws.io.to(`chat:${chatId}`).emit("newMessage", {
        id: message.id,
        content: message.content,
        userId: message.userId,
        chatId: message.chatId,
        createdAt: message.createdAt,
      });

      console.log(`Mensaje emitido en chat:${chatId}`);
    } catch (error) {
      console.error("Error al procesar el mensaje:", error);
    }
  });

  // Manejar desconexión del cliente
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});
