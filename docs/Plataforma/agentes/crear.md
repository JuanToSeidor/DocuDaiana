---
title: Crear agente
iconName: "chats"
---
import {Banerimg} from '../../../Studio/efectsstudio.tsx'


<Banerimg img="agentes/creara.gif" />

La página **Crear Agente** guía al usuario a través de un proceso asistido (wizard) para configurar paso a paso un nuevo agente conversacional en Daiana. Este enfoque guiado facilita la creación sin requerir conocimientos técnicos avanzados.

---



## 1. Selección de equipo

![a](/img/agentes/crear/p1.png)

El primer paso consiste en asignar el agente a uno o más **equipos**. Esto determina qué grupos de usuarios podrán acceder y utilizar el asistente una vez creado.

---

## 2. Configuración general

![a](/img/agentes/crear/p2.png)

En esta etapa se definen los aspectos clave del comportamiento del agente:

1. **Nombre del asistente**
1. **Mensaje de bienvenida**: lo primero que el usuario ve al iniciar el chat con el agente.
1. **Mensaje de fallback**: respuesta que se muestra cuando el agente no puede entender o responder una consulta.
1. **Descripción del agente**: texto que resume su propósito, área de acción o tipo de consultas que atiende.
1. **Prompt personalizado**: instrucciones que definen el tono, estilo y comportamiento del agente ante cualquier interacción.

---

## 3. Agregar base de conocimiento

![a](/img/agentes/crear/p3.png)

Se seleccionan las **fuentes de conocimiento** desde las que el agente podrá extraer información para responder. Estas pueden incluir:

- Documentos
- Bases de datos
- URLs
- Integraciones con plataformas externas

> El agente puede estar vinculado a una o múltiples bases según sus necesidades.

---

## 4. Selección del modelo LLM

![a](/img/agentes/crear/p4.png)
En este paso se define qué **modelo de lenguaje** (LLM) utilizará el agente para generar sus respuestas. Por ejemplo:

- GPT-4
- Gemini
- Otros modelos disponibles en tu organización

La elección del modelo puede afectar el estilo de respuesta, el rendimiento y el costo.

---

## 5. Resumen final

![a](/img/agentes/crear/p5.png)
Antes de confirmar la creación, se muestra un **resumen completo** del agente configurado:

- Equipos asignados
- Nombre y descripción
- Mensajes configurados
- Prompt
- Bases de conocimiento seleccionadas
- Modelo LLM asignado

Desde esta vista, el usuario puede **modificar** cualquier sección antes de finalizar.

::::info
Una vez validado, se crea el agente y queda listo para usarse o ser ajustado desde la vista de administración.
:::::


