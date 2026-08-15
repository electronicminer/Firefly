// Project data configuration file
// Used to manage data for the project display page
// 数据来自 GitHub: https://github.com/electronicminer?tab=repositories

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "gesture-christmas-tree",
		title: "手势控制 3D 圣诞树",
		description:
			"一个由手势控制的 3D 粒子圣诞树。基于 Three.js 与 MediaPipe 构建，用手势实时操控粒子的聚合与散开，视觉效果炫酷。⭐ 86 star",
		image: "",
		category: "web",
		techStack: ["Three.js", "MediaPipe", "JavaScript"],
		status: "completed",
		sourceCode:
			"https://github.com/electronicminer/gesture-Christmas_tree-3d_with_photo",
		startDate: "2025-12-01",
		featured: true,
		tags: ["Three.js", "计算机视觉", "创意编程"],
		showImage: false,
	},
	{
		id: "harmony-markdown-editor",
		title: "Harmony Markdown Editor",
		description:
			一款深度集成 AI 能力、专为 HarmonyOS 6 设计开发的 Markdown 编辑器。继承鸿蒙「原子化服务」「统一生态」「自然交互」理念，界面与动效原汁原味，并将 AI 深度融入写作工作流。⭐ 19 star",
		image: "",
		category: "mobile",
		techStack: ["TypeScript", "HarmonyOS", "ArkUI"],
		status: "in-progress",
		sourceCode: "https://github.com/electronicminer/Harmony-Markdown-Editor",
		startDate: "2026-05-01",
		featured: true,
		tags: ["HarmonyOS", "AI", "编辑器"],
		showImage: false,
	},
	{
		id: "esp32-deepseek",
		title: "ESP32 DeepSeek",
		description:
			"在 ESP32 嵌入式设备上接入 DeepSeek 大模型，让单片机也能对话。⭐ 21 star",
		image: "",
		category: "other",
		techStack: ["C++", "ESP32", "DeepSeek API"],
		status: "completed",
		sourceCode: "https://github.com/electronicminer/esp32-deepseek",
		startDate: "2026-01-01",
		featured: true,
		tags: ["嵌入式", "IoT", "AI"],
		showImage: false,
	},
	{
		id: "immersive-translate-assistant",
		title: "沉浸翻译助手",
		description:
			"基于 AI（SiliconFlow API）的油猴脚本，主打「原地替换」式翻译，消除阅读割裂感。设计致敬 Apple Design，大量使用物理动效、毛玻璃材质与 iPadOS 风格交互。⭐ 6 star",
		image: "",
		category: "web",
		techStack: ["JavaScript", "Tampermonkey", "AI API"],
		status: "completed",
		sourceCode: "https://github.com/electronicminer/-Immersive-Translate-Assistant-",
		startDate: "2026-06-01",
		tags: ["浏览器扩展", "AI", "翻译"],
		showImage: false,
	},
	{
		id: "esp32-deauther",
		title: "ESP32-s3 Deauther",
		description:
			"ESP32-s3 安全研究工具（含 Apple Juice 演示），用于无线安全学习与测试。⭐ 17 star",
		image: "",
		category: "other",
		techStack: ["C++", "ESP32-s3"],
		status: "completed",
		sourceCode:
			"https://github.com/electronicminer/ESP32-s3-Deauther-master-with-apple-juice",
		startDate: "2026-07-01",
		tags: ["嵌入式", "无线安全"],
		showImage: false,
	},
	{
		id: "lext",
		title: "LExt",
		description:
			"论文《Listen to Extract》的 PyTorch 复现，深度学习科研项目。",
		image: "",
		category: "other",
		techStack: ["Python", "PyTorch", "深度学习"],
		status: "in-progress",
		sourceCode: "https://github.com/electronicminer/LExt",
		startDate: "2026-07-01",
		tags: ["科研", "复现"],
		showImage: false,
	},
	{
		id: "handwritten-digit-recognition",
		title: "手写数字识别（带 GUI）",
		description:
			"Handwritten Digit Recognition | Python + Tkinter + PyTorch | MNIST CNN 模型，带可视化界面。⭐ 5 star",
		image: "",
		category: "desktop",
		techStack: ["Python", "PyTorch", "Tkinter"],
		status: "completed",
		sourceCode:
			"https://github.com/electronicminer/handwritten-digit-recognition-with-gui",
		startDate: "2026-01-15",
		tags: ["深度学习", "CNN", "GUI"],
		showImage: false,
	},
	{
		id: "esp32s3-cam",
		title: "ESP32-s3 摄像头 Web 服务器",
		description: "基于 ESP32-s3 的摄像头 WebServer，实时视频流传输。",
		image: "",
		category: "other",
		techStack: ["C", "ESP32-s3", "Camera"],
		status: "completed",
		sourceCode: "https://github.com/electronicminer/esp32s3-cam",
		startDate: "2025-08-01",
		tags: ["嵌入式", "IoT"],
		showImage: false,
	},
	{
		id: "wifi-phishing-portal",
		title: "ESP32 WiFi 钓鱼门户研究",
		description: "ESP32 WiFi Phishing Portal 安全研究项目。",
		image: "",
		category: "other",
		techStack: ["C++", "ESP32"],
		status: "completed",
		sourceCode:
			"https://github.com/electronicminer/ESP32-WiFi-Phishing-Portal-Project",
		startDate: "2026-07-01",
		tags: ["无线安全", "研究"],
		showImage: false,
	},
	{
		id: "web-wifi-config",
		title: "Web WiFi 配网",
		description: "Arduino/ESP32 的 Web 配网页面，通过浏览器为设备配置 WiFi。",
		image: "",
		category: "other",
		techStack: ["C++", "Arduino", "ESP32"],
		status: "completed",
		sourceCode: "https://github.com/electronicminer/web-wifi-config",
		startDate: "2025-11-01",
		tags: ["嵌入式", "配网"],
		showImage: false,
	},
];