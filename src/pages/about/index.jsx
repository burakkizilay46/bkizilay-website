import Layout from "@/layout";
import Image from "next/image";
export default function Profile() {
  return (
    <div>
      <div className="flex flex-row">
        <Image
          src={"/about/mee.jpg"}
          width={256}
          height={256}
          alt="burakkizilay"
        />
        <br />
        <div className="px-10 w-3/4 flex flex-col">
          <h1 className="text-3xl">Benim Hakkımda</h1>
          <br />
          <p className=" font-light text-lg">
            5 yaşından itibaren bilgisayarla çok fazla vakit geçiren, lise
            yıllarında yazılım alanında bir şeyler yapmaya çalışan ve
            üniversitede yazılım mühendisliği bölümünü kazandıktan sonra
            profesyonel olarak yazılımla ilgilenen, şu sıralar bir şirkette
            mobile ve front end geliştirici olarak çalışan 22 level göbekli
            yazılımcı ve abi.
          </p>
          <br />
          <div>
            <h3 className="text-lg font-medium">Languages and Tools:</h3>
            <br />
            <div className="flex flex-row space-x-4">
              <a
                href="https://developer.android.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                  alt="android"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://www.arduino.cc/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                  alt="arduino"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://dart.dev" target="_blank" rel="noreferrer">
                <Image
                  src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                  alt="dart"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <Image
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://flutter.dev" target="_blank" rel="noreferrer">
                <Image
                  src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                  alt="flutter"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <Image
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                <Image
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="40"
                  height="40"
                />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Profile.Layout = Layout;
