import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { type, name, email, message, extra } = body;

    let serviceTitle = "Nueva Consulta Comercial";
    let serviceSubtitle = "Solicitud recibida desde el sitio web";
    let serviceColor = "#0f172a";

    // TIPOS DE MENSAJE SEGÚN SERVICIO
    if (type === "Persona") {
      serviceTitle = "Consulta | Liderazgo Personal";
      serviceSubtitle = "Interes en Liderazgo personal";
      serviceColor = "#7c2d12";
    }
    if (type === "Empresa") {
      serviceTitle = "Consulta | Estrategia Empresarial";
      serviceSubtitle =
        "Interés en procesos de cambio organizacional y cultura interna";
      serviceColor = "#1e3a8a";
    }

    if (type === "Deportes") {
      serviceTitle = "Consulta | Liderazgo Deportivo";
      serviceSubtitle = "Interés en Desarrollo Deportivo de alto rendimiento";
      serviceColor = "#065f46";
    }

    await resend.emails.send({
      from: "Pablo Martin Gonzalez - Consultoría <onboarding@resend.dev>",
      to: "carolinaarizat93@gmail.com",
      subject: `${serviceTitle} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f8f9fa; padding:40px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">

            <div style="background:${serviceColor}; padding:30px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:28px;">
                ${serviceTitle}
              </h1>
              <p style="color:#e5e7eb; margin-top:8px; font-size:14px;">
                ${serviceSubtitle}
              </p>
            </div>

            <div style="padding:32px;">
              <h2 style="color:#111827; margin-top:0;">Datos del contacto</h2>

              <table style="width:100%; border-collapse:collapse; font-size:15px;">
                <tr>
                  <td style="padding:10px 0; color:#6b7280;"><strong>Servicio</strong></td>
                  <td style="padding:10px 0; color:#111827;">${type}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#6b7280;"><strong>Nombre</strong></td>
                  <td style="padding:10px 0; color:#111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#6b7280;"><strong>Email</strong></td>
                  <td style="padding:10px 0; color:#111827;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; color:#6b7280;"><strong>Empresa / Cargo</strong></td>
                  <td style="padding:10px 0; color:#111827;">${extra}</td>
                </tr>
              </table>

              <div style="margin-top:28px;">
                <h3 style="color:#111827; margin-bottom:10px;">Mensaje</h3>
                <div style="background:#f3f4f6; padding:18px; border-radius:10px; color:#374151; line-height:1.6;">
                  ${message}
                </div>
              </div>

              <div style="margin-top:32px; padding-top:24px; border-top:1px solid #e5e7eb;">
                <p style="margin:0; color:#6b7280; font-size:14px;">
                  Lead generado automáticamente desde el formulario web.
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}
