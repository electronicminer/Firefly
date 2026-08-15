import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	// 添加相册示例（记得在 public/gallery/ 目录下创建 id 同名的子目录并放入图片）：
	// {
	// 	id: "my-trip-2026",
	// 	name: "相册名",
	// 	description: "相册描述",
	// 	location: "拍摄地点",
	// 	date: "2026-01-01",
	// 	tags: ["标签"],
	// },
	albums: [],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
