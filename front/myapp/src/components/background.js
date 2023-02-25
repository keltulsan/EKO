import React, { useEffect, useState, useCallback } from "react";

export default function Background() {
    const [scrollValue, setScrollValue] = useState(0);
    const [mousePos, setMousePos] = useState({x:0, y:0});
    useEffect(() => {
  
      const onScroll = (e) => {
        setScrollValue(e.target.documentElement.scrollTop);
      };
  
      window.addEventListener('scroll', onScroll);
  
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const [imgsMap, setImgsMap] = useState([]);
    const [imgs, setImgs] = useState([]);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    })

    useEffect(() => {
        var newImgs = imgs

        if (imgs.length < Math.floor(dimensions.width * dimensions.height / 50000)) {
            for (let i = imgs.length; i < Math.floor(dimensions.width * dimensions.height / 50000); i++) {
                var newImg = {
                    dir: "./img/background/" + (Math.floor(Math.random() * 47)).toString() + ".png",
                    rot: (Math.random() * 360).toString(),
                    size: Math.random() * 125 + 50,
                    pos_x: Math.random() * (dimensions.height + 200) - 100,
                    pos_y: Math.random() * (dimensions.width + 200) - 100
                }
                newImgs[newImgs.length] = newImg
            }
            setImgs(newImgs)
        } else {

            if (imgs.length > 0) {
                setImgsMap(
                    imgs.map((val, i) =>
                        <img key={i} src={val.dir}
                            style={{
                                position: 'absolute',
                                zIndex: -999,
                                rotation: val.rot + 'deg',
                                width: val.size.toString() + 'px',
                                top: (val.pos_x + (val.size/2 * -(mousePos.y +1) + val.size/2 * -(scrollValue*75 +1)) / 5000).toString() + 'px',
                                left: (val.pos_y + (val.size * -(mousePos.x +1)) / 5000).toString() + 'px'
                            }}
                            alt="Une des images du background d'Eko"
                        />
                    )
                )
            }
        }
    });

    return <div
        style={{
            zIndex: -999,
            position: 'fixed',
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
            top: '0px'
        }}>
        {imgsMap}
    </div>
}