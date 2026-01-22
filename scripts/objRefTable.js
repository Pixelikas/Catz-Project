const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Behaviors.Platform.Cnds.OnJump
	];
};
self.C3_JsPropNameTable = [
	{GuriSprite: 0},
	{BrieSprite: 0},
	{SabáSprite: 0},
	{Pássaro: 0},
	{SpriteTelaInicial: 0},
	{Garrafa: 0},
	{Escova: 0},
	{Esteban: 0},
	{Caneca: 0},
	{Cadeira: 0},
	{Planta: 0},
	{Quadro: 0},
	{Mesa: 0},
	{BotãoJogar: 0},
	{Mouse: 0},
	{BrieV1: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{BrieV2: 0},
	{Sólido: 0},
	{Cenário: 0},
	{Reinicia: 0},
	{Sprite: 0},
	{Áudio: 0}
];

self.InstanceType = {
	GuriSprite: class extends self.ISpriteInstance {},
	BrieSprite: class extends self.ISpriteInstance {},
	SabáSprite: class extends self.ISpriteInstance {},
	Pássaro: class extends self.ISpriteInstance {},
	SpriteTelaInicial: class extends self.ISpriteInstance {},
	Garrafa: class extends self.ISpriteInstance {},
	Escova: class extends self.ISpriteInstance {},
	Esteban: class extends self.ISpriteInstance {},
	Caneca: class extends self.ISpriteInstance {},
	Cadeira: class extends self.ISpriteInstance {},
	Planta: class extends self.ISpriteInstance {},
	Quadro: class extends self.ISpriteInstance {},
	Mesa: class extends self.ISpriteInstance {},
	BotãoJogar: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	BrieV1: class extends self.ISpriteInstance {},
	BrieV2: class extends self.ISpriteInstance {},
	Cenário: class extends self.ITilemapInstance {},
	Reinicia: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {}
}